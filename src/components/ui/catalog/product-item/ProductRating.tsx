import { ReviewService } from '@/services/review.service'
import { IProduct } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const { data: rating } = useQuery(
		['get product rating', product.id],
		() => ReviewService.getAverageByProduct(product.id),
		{
			select: ({ data }) => data
		}
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
			/>
            <span>{product.reviews.length} reviews</span>
		</>
	)
}

export default ProductRating
