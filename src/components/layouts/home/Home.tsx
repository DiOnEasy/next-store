import { TypePaginationProducts } from "@/types/product.interface"
import Catalog from "@/ui/catalog/Catalog"
import { FC } from "react"

const Home: FC<TypePaginationProducts> = ({products, length}) => {
    return (
        <>
        {/* {carousel} */}
        <Catalog products={products || []}/>

        </>
    )
}

export default Home