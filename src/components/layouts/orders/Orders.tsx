import { errorCatch } from '@/api/api.helper'
import { OrderService } from '@/services/order.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

const Orders: FC = () => {
	const { data } = useQuery(['get orders'], () => OrderService.getAll(), {
		select: ({ data }) => data,
		onError: error => {
			console.log(errorCatch(error))
		}
	})
	console.log()
	return (
		<div className="p-10">
			{data?.map(item => 
				 (
					<div
						style={
							item.status === 'PAYED'
								? { backgroundColor: 'rgba(52, 235, 73, 0.35)' }
								: { backgroundColor: 'rgba(235, 226, 52, 0.35)' }
						}
						className="p-3 rounded-xl text-xl mb-5 grid grid-cols-3"
					>
						<p>Order id:{item.id}</p>
						<p>Order status: {item.status}</p>
						<p>Date: {String(new Date(item.createdAt)).split('GMT')[0]}</p>
					</div>
				)
			)}
		</div>
	)
}

export default Orders
