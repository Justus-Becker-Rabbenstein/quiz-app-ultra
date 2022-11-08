import { useState } from "react";
import { ReactComponent as BookmarkLogoEmpty } from "../../assets/images/bookmark-regular.svg";
import { ReactComponent as BookmarkLogoFull } from "../../assets/images/bookmark-solid.svg";
import "./Card.css";

function Card({ clickedBoolAnswer, cardQuestion, cardAnswer, isBookmarked }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function buttonToggle() {
    if (showAnswer === false) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
    }
  }

  return (
    <article className="card">
      <section className="card__section">
        {isBookmarked ? (
          <BookmarkLogoFull className="card__bookmark" />
        ) : (
          <BookmarkLogoEmpty className="card__bookmark" />
        )}
        <h2 className="card__item">{cardQuestion}</h2>
        <button className="card__button" onClick={buttonToggle}>
          {showAnswer ? "Hide answer" : "Show answer"}
        </button>
        <h3 className={showAnswer ? "card__item" : "card__item hide"}>
          {cardAnswer}
        </h3>
      </section>
    </article>
  );
}

export { Card };
