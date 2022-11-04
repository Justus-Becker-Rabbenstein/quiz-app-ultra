import { useEffect, useState } from "react";
import "./Card.css";

function Card({ clickedBoolAnswer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [buttonString, setButtonString] = useState("Show answer");
  const [answerString, setAnswerString] = useState("card__item hide");

  function buttonToggle() {
    if (showAnswer == false) {
      setShowAnswer(true);
      setButtonString("Hide answer");
      setAnswerString("card__item");
    } else {
      setShowAnswer(false);
      setButtonString("Show answer");
      setAnswerString("card__item hide");
    }
  }

  return (
    <article className="card">
      <h2 className="card__item">Frage</h2>
      <button className="card__button" onClick={buttonToggle}>
        {`${buttonString}`}
      </button>
      <h3 className={`${answerString}`}>Teststring</h3>
    </article>
  );
}

export { Card };
