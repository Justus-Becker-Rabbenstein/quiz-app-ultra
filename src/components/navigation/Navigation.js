import "./Navigation.css";
import { useState } from "react";

function Navigation({ currentPage, setCurrentPage }) {
  const [classHighlighterHome, setClassHighlighterHome] = useState(
    "navbar__button navbar__button__highlight"
  );
  const [classHighlighterBookmark, setClassHighlighterBookmark] =
    useState("navbar__button");
  const [classHighlighterAddCard, setClassHighlighterAddCard] =
    useState("navbar__button");
  const [classHighlighterProfile, setClassHighlighterProfile] =
    useState("navbar__button");

  function changePage() {
    if (currentPage === "Home") {
      setClassHighlighterHome("navbar__button navbar__button__highlight");
      setClassHighlighterBookmark("navbar__button");
      setClassHighlighterAddCard("navbar__button");
      setClassHighlighterProfile("navbar__button");
    } else if (currentPage === "Bookmark") {
      setClassHighlighterBookmark("navbar__button navbar__button__highlight");
      setClassHighlighterHome("navbar__button");
      setClassHighlighterAddCard("navbar__button");
      setClassHighlighterProfile("navbar__button");
    } else if (currentPage === "addCard") {
      setClassHighlighterAddCard("navbar__button navbar__button__highlight");
      setClassHighlighterHome("navbar__button");
      setClassHighlighterBookmark("navbar__button");
      setClassHighlighterProfile("navbar__button");
    } else {
      setClassHighlighterProfile("navbar__button navbar__button__highlight");
      setClassHighlighterHome("navbar__button");
      setClassHighlighterBookmark("navbar__button");
      setClassHighlighterAddCard("navbar__button");
    }
  }

  function siteHandlerHome() {
    setCurrentPage("Home");
    changePage();
  }
  function siteHandlerBookmark() {
    setCurrentPage("Bookmark");
    changePage();
  }
  function siteHandlerAddCard() {
    setCurrentPage("addCard");
    changePage();
  }
  function siteHandlerProfile() {
    setCurrentPage("Profile");
    changePage();
  }

  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li className="navbar_li">
          <button
            className={`${classHighlighterHome}`}
            onClick={siteHandlerHome}
          >
            Home
          </button>
        </li>
        <li className="navbar_li">
          <button
            className={`${classHighlighterBookmark}`}
            onClick={siteHandlerBookmark}
          >
            Bookmark
          </button>
        </li>
        <li className="navbar_li">
          <button
            className={`${classHighlighterAddCard}`}
            onClick={siteHandlerAddCard}
          >
            addCard
          </button>
        </li>
        <li className="navbar_li">
          <button
            className={`${classHighlighterProfile}`}
            onClick={siteHandlerProfile}
          >
            Profile
          </button>
        </li>
      </ul>
    </nav>
  );
}

export { Navigation };
