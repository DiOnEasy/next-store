import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const [rating, setRating] = useState<number>(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)

	return (
		<>
			<span>Review:</span>
			<Rating
				readonly
				initialValue={rating}
				SVGstyle={{ display: 'inline-block' }}
				size={34}
				allowFraction
				transition
			/> {rating}
			<span> ({product.reviews.length} reviews)</span>
		</>
	)
}

export default ProductRating
