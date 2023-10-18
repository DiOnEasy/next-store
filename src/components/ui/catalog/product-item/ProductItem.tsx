import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

import { convertPrice } from '@/utils/convert-price'
import Image from 'next/image'
import Link from 'next/link'
import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className="">
			<div className="relative z-10">
				<div className="absolute bg-white/30 rounded-xl  p-0.5 top-2 left-2 z-20">
					<FavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						className="relative rounded-2xl"
						width={300}
						height={300}
						src={product.images[0]}
						alt={product.name}
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<p className="my-1 text-xl font-bold">{product.name}</p>
			</Link>
			<p className="text-aqua mb-2 text-lg font-semibold">
				<Link href={`/category/${product.category.slug}`}>
					<span className="hover:text-red">{product.category.name}</span>
				</Link>
			</p>
			<ProductRating product={product} />
			<p className="text-xl font-semibold">{convertPrice(product.price)}</p>
		</div>
	)
}

export default ProductItem
