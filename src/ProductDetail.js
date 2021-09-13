import React from "react"
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import productsData from "./productsData"


function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>

            {
                thisProduct.images.map((reptile) => <img src={reptile} alt="..."/>)
            }
        
            <Link to="/products">Back</Link>
        </div>
    )
}

export default ProductDetail