import { useStore } from '@/hooks/useStore'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

import { HiMiniShoppingCart, HiOutlineShoppingCart } from 'react-icons/hi2'

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
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

	return (
		<>
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
			>
                            {currentElement ? <HiMiniShoppingCart/> : <HiOutlineShoppingCart/>}

            </button>
		</>
	)
}

export default AddToCartButton
