import { useState } from "react";
import {ReactComponent as BookmarkLogoEmpty} from "../../assets/images/bookmark-regular.svg";
import {ReactComponent as BookmarkLogoFull} from "../../assets/images/bookmark-solid.svg";
import "./Card.css";

function Card({ clickedBoolAnswer, cardsArray, setCardsArray, key}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [buttonString, setButtonString] = useState("Show answer");

  function buttonToggle() {
    if (showAnswer === false) {
      setShowAnswer(true);
      setButtonString("Hide answer");
    } else {
      setShowAnswer(false);
      setButtonString("Show answer");
    }
  }

  return (
    <article className="card">
      {cardsArray.map((p1, p2) => 
      <>
      <section className="card__section">
      {p1.isBookmarked ? <BookmarkLogoFull className="card__bookmark" /> : <BookmarkLogoEmpty className="card__bookmark"/>}
      <h2 className="card__item">{p1.question}</h2>
      <button className="card__button" onClick={buttonToggle}>
        {`${buttonString}`}
      </button>
      <h3 className={showAnswer ? "card__item" : "card__item hide"}>{p1.answer}</h3>
      </section>
      </>
      )}
    </article>
  );
}

export { Card };
