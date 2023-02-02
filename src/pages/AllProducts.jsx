import { useCallback, useState } from "react";
import axios from 'axios'
import ProductsList from "../components/Products/List";

export default function AllProducts() {
    const [products, setProducts] = useState([])
    const getAllProducts = useCallback( async () => {
        const response = await axios.get('https://marketplace-back-production-3756.up.railway.app/products')
        setProducts(response.data)
    }, [])
    getAllProducts()
    return (
        <main className="">
                <div className="">
                    <div className="">
                        <ProductsList products={products}></ProductsList>
                    </div>
                </div>
        </main>
    )
}