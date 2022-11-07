import { useState } from "react";
import { Cards } from "../cards/Cards";
import "./Bookmark.css";

function Bookmark({ currentPage, setCurrentPage, cardsArray, varName }) {
  const [filteredArray, setFilteredArray] = useState([]);

  function ffArray() {
    /*         setFilteredArray(cardsArray.filter((p1) => cardsArray.isBookmarked === true)); */
    console.log(varName);
  }
  return (
    <>
      <article className="card">
        <button onClick={ffArray}>Test</button>
      </article>
    </>
  );
}

export { Bookmark };
