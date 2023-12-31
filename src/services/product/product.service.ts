import { instance } from '@/api/api.interceptor'
import { IProduct, TypePaginationProducts } from '@/types/product.interface'
import {
	PRODUCTS,
	TypeProductData,
	TypeProductDataFilters
} from './product.types'

export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		const { data } = await instance<TypePaginationProducts>({
			url: PRODUCTS,
			method: 'GET',
			params: queryData
		})
		return data
	},

	async getSimilar(productId: string | number) {
		return instance<IProduct[]>({
			url: `${PRODUCTS}/similar/${productId}`,
			method: 'GET'
		})
	},
	async getBySlug(productSlug: string) {
		return instance<IProduct>({
			url: `${PRODUCTS}/by-slug/${productSlug}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return instance<IProduct[]>({
			url: `${PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async getById(productId: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${productId}`,
			method: 'GET'
		})
	},
	async create() {
		return instance<IProduct>({
			url: PRODUCTS,
			method: 'POST'
		})
	},

	async update(id: string | number, data: TypeProductData) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'DELETE'
		})
	}
}
