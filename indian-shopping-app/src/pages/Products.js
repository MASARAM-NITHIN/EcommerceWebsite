
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const { addToCart, cart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <header className="header">
        <h2>🛍️ Bharat Mart</h2>
        <div className="cart" onClick={() => navigate("/cart")}>
          🛒 {cart.length}
        </div>
      </header>

      <input
        className="search"
        placeholder="Search products..."
        onChange={e => setSearch(e.target.value)}
      />

      <div className="grid">
        {products
          .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
          .map(p => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
      </div>

      <footer className="tabs">
        <span onClick={() => navigate("/")}>Products</span>
        <span onClick={() => navigate("/list")}>Shopping List</span>
        <span onClick={() => navigate("/addresses")}>Addresses</span>
      </footer>
    </div>
  );
}
