import { FC } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi2'

const Cart: FC = () => {
	return <div className='text-3xl cursor-pointer hover:shadow-primary hover:shadow-md shadow-secondary shadow-inner bg-primary p-1.5 rounded-lg'>
		<HiOutlineShoppingCart />
	</div>
}

export default Cart
