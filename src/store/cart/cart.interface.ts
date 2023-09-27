import { ICartItem } from "@/types/cart.interface";


export interface ICartinitialState {
    items: ICartItem[]
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'>{}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
    type: 'minus' | 'plus'
}