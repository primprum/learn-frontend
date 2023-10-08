const Product = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product); // Call a function to add the product to the cart
  };

  return (
    <div className="p-6 space-x-6 flex items-center justify-evenly">
      <div id="product-logo">
        <h2 className="text-xl font-bold underline text-red-500">{product.name}</h2>
      </div>
      <div id="product-detail">
        <h3 className="font-mono font-bold">Product Title</h3>
        <p className="italic text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit consectetur, adipisicing elit</p>
        <p>=========</p>
        <p className="font-mono font-semibold">Price: ${product.price}</p>
      </div>
      <div id="product-button">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
