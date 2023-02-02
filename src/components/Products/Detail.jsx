export default function Detail({product}) {
    return (
        <div>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <img src={product.thumbnail} alt="" />
        </div>
    )
}