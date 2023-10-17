import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Heading from '../Heading'
import { Loader } from '../Loader'
import ProductItem from './product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <Loader />

	return (
		<div className='ml-5 pt-5'>
			{title && <Heading>{title}</Heading>}
			<div className='grid mt-5 grid-cols-4 gap-x-10 gap-y-10'>
				{products.map(product => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default Catalog
