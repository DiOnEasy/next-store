import Orders from '@/components/layouts/orders/Orders'
import Layout from '@/ui/layout/Layout'
import { NextPage } from 'next'

const OrdersPage: NextPage = () => {
	return (
		<div>
			<Layout>
                <Orders/>
			</Layout>
		</div>
	)


    
}

export default OrdersPage
