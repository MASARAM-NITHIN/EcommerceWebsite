
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item, i) => (
        <p key={i}>{item.name} - ₹{item.price}</p>
      ))}
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={() => navigate("/addresses")}>Purchase</button>
    </div>
  );
}
