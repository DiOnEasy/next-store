import { IProduct } from "@/types/product.interface";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

const ProductRating:FC<{product: IProduct}> =({product}) => {


    const {} = useQuery(['get product rating', product.id], )

    return(
<></>
    )
}

export default ProductRating