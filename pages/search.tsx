import { ProductService } from '@/services/product/product.service'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const SearchPage: NextPage = () => {

    const {query} = useRouter()


    const {data} = useQuery(['search products', query.productName], () =>
        ProductService.getAll({
            searchTerm: query.productName as string
        })
    )


	return (
		<div>
			<Layout>
                
				<Catalog products={data?.products || []} title={data?.products.length ? `Showing ${data?.length} products for ${query.productName}` : 'Nothing was found for your request'} />
			</Layout>
		</div>
	)


    
}

export default SearchPage
