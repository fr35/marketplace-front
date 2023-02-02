import { useCallback, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import Detail from "../components/Products/Detail"
export default function ProductDetail() {
    const [products, setProducts] = useState([])
    const id = useParams().id
    const getProduct = useCallback( async () => {
        const response = await axios.get(`https://marketplace-back-production-3756.up.railway.app/products/${id}`)
        setProducts(response.data)
    }, [])
    getProduct()
    return (
        <Detail product={products}></Detail>
    )
}
