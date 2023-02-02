import { Link } from "react-router-dom"
export default function ProductCard({id, title, description, thumbnail, price, stock}) {
    return (
        <div>
            <img src={thumbnail} alt="thumbnail" />
            <Link to={`${id}`}>
                <h2 className="text">{title}</h2>
            </Link>
            <p>{description}</p>
            <p className="textSecondary">Vendido por <span className="userProductSeller">Usuario</span></p>
            <h2 className="text textPrice">$ {price}</h2>
            <p>Stock: {stock}</p>
        </div>
    )
}