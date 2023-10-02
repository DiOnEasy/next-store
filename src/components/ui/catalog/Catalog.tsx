import { IProduct } from '@/types/product.interface';
import { FC } from 'react';
import Heading from '../Heading';
import { Loader } from '../Loader';
import ProductItem from './product-item/ProductItem';



interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}




const Catalog: FC<ICatalog> = ({
	products,
	isLoading,
	title
}) => {
	if (isLoading) return <Loader/>

	return (
		<>
		{title && <Heading>{title}</Heading>}
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</>
	)
}

export default Catalog
