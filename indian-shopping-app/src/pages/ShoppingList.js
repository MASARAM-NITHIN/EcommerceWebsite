
import { useState, useEffect } from "react";

export default function ShoppingList() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("list")) || []);
  }, []);

  const add = () => {
    const updated = [...list, item];
    setList(updated);
    localStorage.setItem("list", JSON.stringify(updated));
    setItem("");
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <input value={item} onChange={e => setItem(e.target.value)} />
      <button onClick={add}>Add</button>
      {list.map((i,idx) => <p key={idx}>{i}</p>)}
    </div>
  );
}
