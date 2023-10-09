import { TypePaginationProducts } from "@/types/product.interface"
import PaginationCatalog from "@/ui/catalog/PaginationCatalog"
import Layout from "@/ui/layout/Layout"
import { FC } from "react"

const Home: FC<TypePaginationProducts> = ({products, length}) => {
    return (
        <>
        {/* {carousel} */}
        <Layout>
        < PaginationCatalog title="Products" data={{products, length}}/>
        </Layout>
        </>
    )
}

export default Home