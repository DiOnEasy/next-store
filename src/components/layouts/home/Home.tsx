import { TypePaginationProducts } from "@/types/product.interface"
import Catalog from "@/ui/catalog/Catalog"
import Layout from "@/ui/layout/Layout"
import { FC } from "react"

const Home: FC<TypePaginationProducts> = ({products, length}) => {
    return (
        <>
        {/* {carousel} */}
        <Layout>
        <Catalog title="Products" products={products || []}/>
        </Layout>
        </>
    )
}

export default Home