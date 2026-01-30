
import Button from "./Button";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      {onAdd && <Button label="Add to Cart" onClick={() => onAdd(product)} />}
    </div>
  );
}
