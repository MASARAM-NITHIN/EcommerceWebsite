
import { useState, useEffect } from "react";

export default function Addresses() {
  const [addresses, setAddresses] = useState([]);
  const [form, setForm] = useState({ name: "", city: "", zip: "" });

  useEffect(() => {
    setAddresses(JSON.parse(localStorage.getItem("addresses")) || []);
  }, []);

  const save = () => {
    const updated = [...addresses, form];
    setAddresses(updated);
    localStorage.setItem("addresses", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Delivery Addresses</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} />
      <input placeholder="City" onChange={e => setForm({...form, city:e.target.value})} />
      <input placeholder="ZIP" onChange={e => setForm({...form, zip:e.target.value})} />
      <button onClick={save}>Save</button>

      {addresses.map((a,i) => (
        <p key={i}>{a.name}, {a.city} - {a.zip}</p>
      ))}
    </div>
  );
}
