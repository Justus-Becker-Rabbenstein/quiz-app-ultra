import { useEffect, useState } from "react";
import "./Card.css";

function Card({clickedBoolAnswer}) {

  const [showAnswer, setShowAnswer] = useState(false);

  function trueSetter(){
    setShowAnswer(true);
  }

  function answerRender() {
    return <h3 className="card__item">Antwort</h3>;
  }
  function noRender() {
  }

  return (
    <article className="card">
      <h2 className="card__item">Frage</h2>
      <button className="card__button" onClick={trueSetter}>showAnswer</button>
      {showAnswer == true ? console.log("test") : noRender}
    </article>
  );
}

export { Card };
