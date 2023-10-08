import { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0); // Initialize the cart total to 0

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartTotal(cartTotal + 1); // Increment the cart total when a product is added
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product !== productToRemove);
    setCart(updatedCart);
    setCartTotal(cartTotal - 1); // Decrement the cart total when a product is removed
  };

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ];

  return (
    <div className="App">
      <nav className="bg-blue-500 p-3 text-white text-xl underline">Online Shop</nav>
      <div id="product-container" className="m-20 p-10 bg-blue-50 rounded-xl flex flex-row space-x-4">
        <div id="content-1" className="w-80 h-full bg-blue-300 rounded-xl basis-3/4">
          <p id="product-list-title" className="p-3 text-xl rounded-t-xl underline text-center text-white bg-blue-500">
            Product List
          </p>
          <div id="product-list">
            {products.map((product) => (
              <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
        <div id="content-2" className="w-80 h-full bg-blue-300 rounded-xl basis-1/4">
          <p id="shopping-cart-title" className="p-3 text-xl rounded-t-xl underline text-center text-white bg-blue-500">
            Shopping Cart
          </p>
          <div id="shopping-cart">
            {cartTotal === 0 ? (
              <p className="p-3 text-xl rounded-b-xl underline text-center text-white bg-rose-500">No items</p> // Display "No items" when the cart is empty
            ) : (
              <div>
                <Cart cartItems={cart} removeFromCart={removeFromCart} />
                <p className="p-3 text-xl rounded-b-xl underline text-center text-white bg-blue-500">Total Items: {cartTotal}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
