import { ProductService } from '@/services/product/product.service'
import { EnumProductSort } from '@/services/product/product.types'
import { TypePaginationProducts } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import Heading from '../Heading'
import { Loader } from '../Loader'
import Button from '../button/Button'
import SortDropdown from './SortDropdown'
import ProductItem from './product-item/ProductItem'

interface IPaginationCatalog {
	data: TypePaginationProducts
	title?: string
}

const PaginationCatalog: FC<IPaginationCatalog> = ({ data, title }) => {
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)
	const [perPage, setPerPage] = useState(4)
	const { data: response, isLoading } = useQuery(
		['products', sortType, perPage],
		() =>
			ProductService.getAll({
				perPage,
				sort: sortType
			}),
		{
			initialData: data
		}
	)

	if (isLoading) return <Loader />
	return (
		<div className="ml-5">
			{title && <Heading>{title}</Heading>}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			<div className="grid grid-cols-4 gap-5 ">
				{response.products.map(product => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
			<Button
				onClick={() => setPerPage(perPage + 4)}
				className=" hover:bg-secondary hover:text-white transition duration-300 ease-in-out m-auto block mt-10 px-10"
				variant="orange"
			>
				Load More
			</Button>
		</div>
	)
}

export default PaginationCatalog
