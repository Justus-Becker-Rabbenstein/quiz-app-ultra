import { useState } from "react";
import BookmarkCard from "../../components/bookmark-card/BookmarkCard";
import "./Bookmark.css";

function Bookmark({ currentPage, setCurrentPage, cardsArray, setCardsArray, key}) {
  return <BookmarkCard           
  currentPage={currentPage} 
  setCurrentPage={setCurrentPage} 
  cardsArray={cardsArray} 
  setCardsArray={setCardsArray} 
  key={key} />
}

export { Bookmark };
