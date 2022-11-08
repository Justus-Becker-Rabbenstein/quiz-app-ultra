import "./Cards.css";
import { Card } from "../../components/card/Card";
import { Bookmark } from "../bookmark/Bookmark";
import { useState } from "react";

export function Cards({
  currentPage,
  setCurrentPage,
  cardsArray,
  setCardsArray,
  key,
  returnCard,
}) {
  return (
    <>
      {console.log(cardsArray)}
      {cardsArray.map((card) => (
        <Card
          cardQuestion={card.question}
          cardAnswer={card.answer}
          isBookmarked={card.isBookmarked}
        />
      ))}
    </>
  );
}
