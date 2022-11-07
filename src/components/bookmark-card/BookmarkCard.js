import React from 'react'
import {ReactComponent as BookmarkLogoEmpty} from "../../assets/images/bookmark-regular.svg";
import {ReactComponent as BookmarkLogoFull} from "../../assets/images/bookmark-solid.svg";
import { useState } from "react";
import "./BookmarkCard";

const BookmarkCard = ({currentPage, setCurrentPage, cardsArray, setCardsArray, key}) => {

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

    const result = cardsArray.filter((p1) => p1.isBookmarked);

  return (
    <article className="card">
    {console.log(result)}
      {result.map((p1, p2) => 
      <>
      <section className="card__section">
      {p1.isBookmarked ? <BookmarkLogoFull className="card__bookmark" /> : <BookmarkLogoEmpty className="card__bookmark"/>}
      <h2 className="card__item">{p1.question}</h2>
      <button className="card__button" onClick={buttonToggle}>
        {`${buttonString}`}
      </button>
      <h3 className={showAnswer ? p1.showAnswer : p1.hideAnswer}>{p1.answer}</h3>
      </section>
      </>
      )}
    </article>
  )
}

export default BookmarkCard