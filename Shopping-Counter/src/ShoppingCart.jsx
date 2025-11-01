import { useState } from "react";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [products] = useState([
    { id: 1, name: "Jollof Rice", price: 1500 },
    { id: 2, name: "Plantain", price: 500 },
    { id: 3, name: "Suya", price: 1200 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const item = cart.find((i) => i.id === product.id);
    if (item) {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cartContainer">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <p>
            {product.name} - ₦{product.price}
          </p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <hr />

      <h2> Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="emptyText">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cartItem">
            <p>
              {item.name} - ₦{item.price} x {item.quantity} = ₦
              {item.price * item.quantity}
            </p>
            <div className="buttonDiv">
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}

      <h3>Total: ₦{total}</h3>
      {cart.length > 0 && (
        <button className="clearBtn" onClick={clearCart}>
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default ShoppingCart;
