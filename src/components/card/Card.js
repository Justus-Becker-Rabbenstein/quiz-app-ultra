import "./Card.css";

function Card() {
  return (
    <article className="card">
      <section className="card__item">Frage</section>
      <button className="card__button">Antwort zeigen</button>
      <section className="card__item">Antwort</section>
    </article>
  );
}

export { Card };
