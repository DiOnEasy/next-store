import Product from "@/components/layouts/product/product";
import { ProductService } from "@/services/product/product.service";
import { IProduct } from "@/types/product.interface";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const ProductPage : NextPage<{product:IProduct}> = ({product}) => {
   
    return <Product product={product}/>
}

export const getStaticPaths: GetStaticPaths = async() =>{
	const {products} = await ProductService.getAll()
    console.log(products)
	const paths = products.map(product => {
		return{
			params: {slug: `${product.slug}`}
		}
	})
	return {paths, fallback: 'blocking'}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const  {data : product}  = await ProductService.getBySlug(
		params?.slug as string
	)
    console.log(product)

	return {
		props: {
			product
		}
	}
}



export default ProductPage