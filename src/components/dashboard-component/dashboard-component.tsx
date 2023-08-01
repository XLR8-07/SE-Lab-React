import React, { useEffect, useState } from "react";
import "./dashboard-component.css"
import ProductComponent from "../product-component/product-component";
import axios from "axios";
export interface IProduct
{
    category: string
    description: string
    id: number
    image: string
    rating:IRating
    title: string
}

export interface IRating
{
    rate: number
    count: number
}
const DashboardComponent = () =>{
    const [products, setProducts]= useState<IProduct[]>([]);
    const getAllProducts = async()=>{
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data)
    }
    useEffect(()=>{
       getAllProducts()
       console.log(products)
    },[])
    return(
        <div className="main-container">
            HELLO
            {products.map((prodct)=> <ProductComponent key={prodct.id}/>)}
        </div>
    )
}

export default DashboardComponent;