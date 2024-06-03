import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import Lista from "./Components/Lista";
import Stats from "./Components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Lista
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}
