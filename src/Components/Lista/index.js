import { useState } from "react";
import Item from "../Item";

export default function Lista({
  items,
  onDeleteItem,
  onToggleItems,
  setItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  function handleClearList() {
    if (items.length) {
      const confirmed = window.confirm(
        "Tem certeza que quer apagar todos os itens?"
      );

      if (confirmed) {
        setItems([]);
      }
    }
  }

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
            item={item}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Filtrar por ordem</option>
          <option value="description">Filtrar por nome</option>
          <option value="packed">Filtrar por embalado</option>
        </select>
        <button onClick={handleClearList}>Limpar Lista</button>
      </div>
    </div>
  );
}
