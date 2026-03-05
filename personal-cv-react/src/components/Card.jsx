function Card({ title, children }) {
  return (
    <section className="card">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {children}
    </section>
  );
}

export default Card;