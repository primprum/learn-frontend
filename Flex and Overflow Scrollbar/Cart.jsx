const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  return (
    <div>
      <ul className="bg-blue-300">
        {cartItems.map((item, index) => (
          <li className="p-6 flex items-center justify-evenly" key={index}>
            <p className="text-xl mr-6 font-bold underline text-red-500">{item.name}</p>
            <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleRemoveFromCart(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
