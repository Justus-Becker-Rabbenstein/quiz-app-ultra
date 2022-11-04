import "./Navigation.css";
import { useState } from "react";
import {ReactComponent as HomeLogo} from "../../assets/images/house-user-solid.svg";
import {ReactComponent as BookmarkLogo} from "../../assets/images/bookmark-solid.svg";
import {ReactComponent as AddCardLogo} from "../../assets/images/file-circle-plus-solid.svg";
import {ReactComponent as ProfileLogo} from "../../assets/images/user-solid.svg";

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
        <HomeLogo className={`${classHighlighterHome}`} onClick={siteHandlerHome}/>
        </li>
        <li className="navbar_li">
          <BookmarkLogo className={`${classHighlighterBookmark}`} onClick={siteHandlerBookmark} />
        </li>
        <li className="navbar_li">
          <AddCardLogo className={`${classHighlighterAddCard}`} onClick={siteHandlerAddCard} />
        </li>
        <li className="navbar_li">
          <ProfileLogo className={`${classHighlighterProfile}`} onClick={siteHandlerProfile} />
        </li>
      </ul>
    </nav>
  );
}

export { Navigation };
