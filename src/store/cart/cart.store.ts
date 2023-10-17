import { makeAutoObservable } from 'mobx'
import {
	IAddToCartPayload,
	ICartinitialState,
	IChangeQuantityPayload
} from './cart.interface'

class CartStore {
	initialState: ICartinitialState = {
		items: [],
		total: 0
	}

	constructor() {
		makeAutoObservable(this)
	}

	addToCart = (data: IAddToCartPayload) => {
		const isExist = this.initialState.items.some(
			item => item.product.id === data.product.id
		)
		if (!isExist) {
			this.initialState.items.push({
				...data,
				id: this.initialState.items.length
			})
		}
	}

	removeFromCart = (itemId: number) => {
		this.initialState.items = this.initialState.items.filter(
			item => item.id !== itemId
		)
	}

	changeQuantity = (data: IChangeQuantityPayload) => {
		const { id, type } = data
        const item = this.initialState.items.find(item => item.id === id)
        if(item){
            type === 'plus' ? item.quantity++ : item.quantity--
        }
	}

    reset = () => {
        this.initialState.items = []
    }

	calcTotal = () => {
		this.initialState.total = this.initialState.items?.reduce((acc, item) => acc + item.price * item.quantity,0)
	}
}

export default new CartStore()