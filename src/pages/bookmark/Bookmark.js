import { useState } from "react";
import { Cards } from "../cards/Cards";
import "./Bookmark.css";

function Bookmark({ currentPage, setCurrentPage, cardsArray, varName }) {
  const [filteredArray, setFilteredArray] = useState([]);

  return <Cards />;
}

export { Bookmark };
