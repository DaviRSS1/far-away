export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Adicione algum item para sua lista de viagem 🚀🚀</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Você já embalou tudo para a viagem!!✈✈"
          : `🧳Você tem ${numItems} itens na sua lista e você já embalou ${numPacked}(
          ${percentage}%)`}
      </em>
    </footer>
  );
}
