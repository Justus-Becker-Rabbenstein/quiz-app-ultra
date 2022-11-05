import { useState } from "react";
import { Cards } from "../../pages/cards/Cards";
import "./Card.css";

function Card({ clickedBoolAnswer,}) {
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

  const questionString = "";

  return (
    <article className="card">
      <h2 className="card__item">{`${questionString}`}</h2>
      <button className="card__button" onClick={buttonToggle}>
        {`${buttonString}`}
      </button>
      <h3 className={`${answerToggleClass}`}>Teststring</h3>
    </article>
  );
}

export { Card };
