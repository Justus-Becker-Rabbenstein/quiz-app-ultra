import { useState } from "react";
import "./Card.css";

function Card({ clickedBoolAnswer, cardsArray, setCardsArray}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [buttonString, setButtonString] = useState("Show answer");
  const [answerToggleClass, setAnswerToggleClass] = useState("card__item hide");

  function buttonToggle() {
    if (showAnswer === false) {
      setShowAnswer(true);
      setButtonString("Hide answer");
      setAnswerToggleClass("card__item");
    } else {
      setShowAnswer(false);
      setButtonString("Show answer");
      setAnswerToggleClass("card__item hide");
    }
  }

  return (
    <article className="card">
      {cardsArray.map((p1) => 
      <>
      <section className="card__section">
      <h2 className="card__item">{p1.question}</h2>
      <button className="card__button" onClick={buttonToggle}>
        {`${buttonString}`}
      </button>
      <h3 className={`${answerToggleClass}`}>{p1.answer}</h3>
      </section>
      </>
      )}
    </article>
  );
}

export { Card };
