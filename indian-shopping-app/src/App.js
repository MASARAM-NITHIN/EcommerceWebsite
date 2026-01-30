
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Addresses from "./pages/Addresses";
import ShoppingList from "./pages/ShoppingList";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/list" element={<ShoppingList />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
