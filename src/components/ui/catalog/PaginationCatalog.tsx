import { EnumProductSort } from '@/services/product/product.types'
import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import Heading from '../Heading'
import { Loader } from '../Loader'
import Button from '../button/Button'
import SortDropdown from './SortDropdown'
import ProductItem from './product-item/ProductItem'

interface IPaginationCatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

const PaginationCatalog: FC<IPaginationCatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <Loader />

const [sortType, setSortType] = useState<EnumProductSort>(EnumProductSort.NEWEST)

	return (
		<div className='ml-5'>
			{title && <Heading>{title}</Heading>}
			<SortDropdown/>
			<div className='grid grid-cols-4 gap-x-5 '>
				{products.map(product => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
			<Button className=" hover:bg-secondary hover:text-white transition duration-300 ease-in-out m-auto block mt-10 px-10" variant="orange">Load More</Button>
		</div>
	)
}

export default PaginationCatalog
