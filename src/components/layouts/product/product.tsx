import { useProfile } from '@/hooks/useProfile'
import { useStore } from '@/hooks/useStore'
import { UserService } from '@/services/user.service'
import { IProduct } from '@/types/product.interface'
import ProductRating from '@/ui/catalog/product-item/ProductRating'
import Layout from '@/ui/layout/Layout'
import { convertPrice } from '@/utils/convert-price'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { FC } from 'react'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Product: FC<{ product: IProduct }> = observer(({ product }) => {
	const {
		cartStore: {
			addToCart,
			removeFromCart,
			initialState: { items }
		}
	} = useStore()



	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['toggle favorite'],
		() => UserService.toggleFavorite(product.id),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)

	const isExists = profile?.favorites.some(
		favorite => favorite.id === product.id
	)

	return (
		<Layout>
			<div className="p-10 overflow-scroll">
				<div className="flex">
					<div className="w-2/5">
						<Carousel infiniteLoop={true}>
							{product.images.map(image => (
								<div className="border border-red">
									<Image
										className=""
										src={image}
										width={300}
										height={0}
										alt="product image"
									/>
								</div>
							))}
						</Carousel>
					</div>
					<div className="p-10 w-3/5">
						<p className="text-3xl font-semibold">{product.name}</p>
						<p className="text-2xl text-red font-semibold">
							{convertPrice(product.price)}
						</p>
						<p className='my-3'>
							<ProductRating product={product} />
						</p>

						<button
							onClick={() =>
								currentElement
									? removeFromCart(currentElement.id)
									: addToCart({
											product,
											quantity: 1,
											price: product.price
									  })
							}
							className="px-5 py-3 text-xl mr-5 mt-5 bg-primary"
						>
							{currentElement ? 'Remove from cart' : 'Add to cart'}
						</button>
						{profile && <button
							onClick={() => mutate()}
							className="px-5 py-3 text-xl mr-5 mt-5 bg-red"
						>
							{isExists ? 'Remove from favorites' : 'Add to favorites'}
						</button>}
						
						<div className="mt-7">
							<p className="text-2xl font-medium mb-1">Product description:</p>
							<p className="text-xl">{product.description}</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
})
export default Product
