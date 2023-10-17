import { useStore } from '@/hooks/useStore'
import Button from '@/ui/button/Button'
import { convertPrice } from '@/utils/convert-price'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'

import { HiOutlineShoppingCart } from 'react-icons/hi2'

const Cart: FC = observer(() => {
	const [isShown, setIsShown] = useState(false)

	const {
		cartStore: {
			initialState: { items, total },
			changeQuantity,
			removeFromCart,
			calcTotal
		}
	} = useStore()

	useEffect(() => {
		calcTotal()
	}, [items.map(item => item.quantity)])

	return (
		<div className="">
			<div
				onClick={() => setIsShown(true)}
				className="text-3xl relative cursor-pointer hover:shadow-primary hover:shadow-md shadow-secondary shadow-inner bg-primary p-1.5 rounded-lg"
			>
				<HiOutlineShoppingCart />
				<div className={' -top-1.5 flex items-center justify-center -right-2 text-xs font-bold bg-red rounded-sm w-4 h-4 text-center' + (items.length ? ' absolute' : ' hidden')}>
				<span>{items.length}</span>
				</div>
			</div>
			<div
				style={{ backgroundColor: 'rgba(0,0,0, 0.25)' }}
				className={
					' z-40 top-0 left-0 w-full h-full ' + (isShown ? ' fixed' : ' hidden')
				}
			>
				<div className="relative w-4/5 h-4/5 z-50 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-md">
					<button
						onClick={() => setIsShown(false)}
						className="absolute top-4 right-4 text-2xl"
					>
						&#10005;
					</button>
					<div className="grid h-5/6 overflow-y-scroll grid-cols-3 items-center gap-10">
						{items.length ? (
							items.map(item => (
								<>
									<div>
										<Image
											alt="cart item"
											src={item.product.images[0]}
											width={200}
											height={0}
										/>
									</div>
									<div>
										<p className="text-2xl">{item.product.name}</p>
										<p className="text-xl"> {convertPrice(item.price)}</p>
									</div>
									<div className="flex items-center gap-3">
										<button
											onClick={() => {
												if (item.quantity > 1)
													changeQuantity({ id: item.id, type: 'minus' })
											}}
										>
											<span className="flex items-center justify-center text-2xl w-10 h-10 bg-gray inline-block rounded-xl">
												-
											</span>
										</button>
										<p className="border w-10 h-10 rounded-sm flex items-center justify-center">
											{item.quantity}
										</p>
										<button
											onClick={() =>
												changeQuantity({ id: item.id, type: 'plus' })
											}
										>
											<span className="flex items-center justify-center text-2xl w-10 h-10 bg-gray inline-block rounded-xl">
												+
											</span>
										</button>
										<button
											onClick={() => removeFromCart(item.id)}
											type="button"
										>
											<span className="text-2xl">
												<BsTrash />
											</span>
										</button>
									</div>
								</>
							))
						) : (
							<div className="text-center text-3xl col-start-2 col-end-3">
								Cart is empty
							</div>
						)}
					</div>
					<div>
						<p className='text-xl text-right mt-5'>
							Total price: <span className='text-2xl font-bold'>{convertPrice(total)}</span>
						</p>
					</div>
					<div className="mt-5">
						<Button className="m-auto block px-10" variant="orange">
							Order
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
})

export default Cart
