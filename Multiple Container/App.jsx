import { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product !== productToRemove);
    setCart(updatedCart);
  };

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
    { id: 4, name: "Product 4", price: 12 },
  ];

  return (
    <div className="App">
      <nav className="bg-blue-500 p-3 text-white text-xl underline">Online Shop</nav>
      <div id="product-container" className="mt-20 mb-3 mx-20 p-10 bg-blue-50 rounded-xl flex flex-col">
        <div id="top-container" className="flex flex-row">
          <p id="product-list-title" className="mr-5 p-3 text-xl rounded-t-xl underline text-center text-white bg-blue-500 basis-3/4">
            Product List
          </p>
          <p id="shopping-cart-title" className="p-3 text-xl rounded-t-xl underline text-center text-white bg-blue-500 basis-1/4">
            Shopping Cart
          </p>
        </div>
        <div id="bottom-container" className="flex flex-row">
          <div id="product-list" className="mr-5 h-96 overflow-y-auto bg-blue-300 rounded-b-xl basis-3/4">
            {products.map((product) => (
              <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
          <div id="shopping-cart" className="h-96 overflow-y-auto rounded-b-xl basis-1/4">
            {cart.length === 0 ? (
              <p className="p-3 text-xl rounded-b-xl underline text-center text-white bg-blue-100 basis-1/4">(empty)</p>
            ) : (
              <>
                <Cart cartItems={cart} removeFromCart={removeFromCart} />
              </>
            )}
          </div>
        </div>
      </div>
      <div id="checkout-container" className="mx-20 p-10 bg-blue-50 rounded-xl flex justify-end">
        {cart.length === 0 ? (
          <p className="p-3 text-xl rounded-xl underline text-center text-white bg-rose-500 basis-1/4">No items</p>
        ) : (
          <>
            <p className="p-3 text-xl rounded-xl underline text-center text-white bg-blue-500 basis-1/4">Total Items: {cart.length}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
