import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

import { convertPrice } from '@/utils/convert-price'
import Image from 'next/image'
import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className="">
			<div className="relative z-10">
				<div className="absolute top-2 left-2 z-20">
					<FavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Image
					className="relative rounded-2xl"
					width={300}
					height={300}
					src={product.images[0]}
					alt={product.name}
				/>
			</div>
			<p className="my-1 text-xl font-bold">{product.name}</p>
			<p className="text-aqua mb-2 text-lg font-semibold">{product.category.name}</p>
			<ProductRating product={product} />
			<p className='text-xl font-semibold'>{convertPrice(product.price)}</p>
		</div>
	)
}

export default ProductItem
