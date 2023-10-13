import Catalog from "@/ui/catalog/Catalog"
import Layout from "@/ui/layout/Layout"
import { FC } from "react"

const Favorites: FC = () => {
return <Layout><Catalog products={products || []} title={category.name} /></Layout>
}

export default Favorites