import './ProductCard.css';

function ProductCard({name, price, image, inStock}){
    return(
        <div className="product-card">

            <img src={image} alt={name} className={inStock ? "imageCard" : "imageOverlay"}/>
            <h3 className="productName">{name}</h3>
            <p className="productPrice">Price: N{price.toFixed(2)}</p>
             <p className={inStock ? 'inStock': 'outOfStock'}>{inStock ? "Available": "Not Available"}</p>
        </div>
    )
}

export default ProductCard;