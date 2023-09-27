import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	createdAt: string

	name: string
	slug: string
	description: string
	price: number
	images: string[]

	reviews: IReview[]
	category: ICategory
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}
