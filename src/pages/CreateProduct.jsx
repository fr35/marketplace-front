import { useState, useCallback } from "react"
import axios from "axios";
export default function CreateProduct() {
    const [product, setProduct] = useState({title: '', description: '', thumbnail: '', price: '', stock: ''})
    const createProductSubmit = useCallback(async (e) => {
        e.preventDefault();
        const response = await axios.post("https://marketplace-back-production-3756.up.railway.app/products",
            {
                title: product.title,
                description: product.description,
                price: product.price,
                stock: product.stock,
                thumbnail: product.thumbnail
            })
    }, [product.title, product.description, product.price, product.stock, product.thumbnail])
    return (
        <div>
            <form action="" onSubmit={createProductSubmit}>
                <input type="text" name="title" placeholder='Title' required value={product.title}
                    onChange={(e) =>
                        setProduct((prevState) => ({
                            ...prevState,
                            title: e.target.value,
                        }))} />

                <input type="text" name="description" placeholder='Description' required value={product.description}
                    onChange={(e) =>
                        setProduct((prevState) => ({
                            ...prevState,
                            description: e.target.value,
                        }))} />

                <input type="number" name="price" placeholder='Price' required value={product.price}
                    onChange={(e) =>
                        setProduct((prevState) => ({
                            ...prevState,
                            price: e.target.value,
                        }))} />

                <input type="number" name="stock" placeholder='Stock' required value={product.stock}
                    onChange={(e) =>
                        setProduct((prevState) => ({
                            ...prevState,
                            stock: e.target.value,
                        }))} />

                <input type="text" name="thumbnail" placeholder='URL' required value={product.thumbnail}
                    onChange={(e) =>
                        setProduct((prevState) => ({
                            ...prevState,
                            thumbnail: e.target.value,
                        }))} />
                <input type="submit" value="Submit" required />
            </form>
        </div>
    )
}