import "./Card.css";

function Card() {
  return (
    <article class="card">
      <section class="card__item">Frage</section>
      <button class="card__button">Antwort zeigen</button>
      <section class="card__item">Antwort</section>
    </article>
  );
}

export { Card };
