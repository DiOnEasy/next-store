import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/types/order.interface'

const ORDERS = 'orders'

type TypeData = {
	items: {
		quantity: number
		productId: number
		price: number
	}[]
}

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: ORDERS,
			method: 'GET'
		})
	},
	async createOrder(data: TypeData) {
		return instance<{ response: { checkout_url: string } }>({
			url: ORDERS,
			method: 'POST',
			data
		})
	}
}
