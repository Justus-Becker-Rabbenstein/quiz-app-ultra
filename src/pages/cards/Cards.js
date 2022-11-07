import "./Cards.css";
import { Card } from "../../components/card/Card";
import { Bookmark } from "../bookmark/Bookmark";
import { useState } from "react";

export function Cards({ currentPage, setCurrentPage, cardsArray, setCardsArray, key} ) {


  return (
    <Card
      cardsArray={cardsArray}
      setCardsArray={setCardsArray}
      key={key}
    />
  );
}
