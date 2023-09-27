import { IProduct } from "@/types/product.interface";
import { FC } from "react";

import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import FavoriteButton from "./FavoriteButton";
import ProductRating from "./ProductRating";

const ProductItem: FC<{product:IProduct}> = ({product}) =>{
    return(
        <>
        <div>
            <FavoriteButton productId={product.id} />
            <AddToCartButton product={product} />
            <Image width={300} height={300} src={product.images[0]} alt={product.name}/>
        </div>
        <p>{product.name}</p>
        <p>{product.category.name}</p>
        <ProductRating product={product} />
        <p>{product.price}</p>
        </>
    )
}

export default ProductItem