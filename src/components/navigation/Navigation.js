import "./Navigation.css";
import { useState } from "react";
import { ReactComponent as HomeLogo } from "../../assets/images/house-user-solid.svg";
import { ReactComponent as BookmarkLogo } from "../../assets/images/bookmark-solid.svg";
import { ReactComponent as AddCardLogo } from "../../assets/images/file-circle-plus-solid.svg";
import { ReactComponent as ProfileLogo } from "../../assets/images/user-solid.svg";

function Navigation({ currentPage, setCurrentPage }) {
  function siteHandlerHome() {
    setCurrentPage("Home");
  }
  function siteHandlerBookmark() {
    setCurrentPage("Bookmark");
  }
  function siteHandlerAddCard() {
    setCurrentPage("addCard");
  }
  function siteHandlerProfile() {
    setCurrentPage("Profile");
    console.log(currentPage);
  }

  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li className="navbar_li">
          <HomeLogo
            className={
              currentPage === "Home"
                ? "navbar__button navbar__button__highlight"
                : "navbar__button"
            }
            onClick={siteHandlerHome}
          />
        </li>
        <li className="navbar_li">
          <BookmarkLogo
            className={
              currentPage === "Bookmark"
                ? "navbar__button navbar__button__highlight"
                : "navbar__button"
            }
            onClick={siteHandlerBookmark}
          />
        </li>
        <li className="navbar_li">
          <AddCardLogo
            className={
              currentPage === "addCard"
                ? "navbar__button navbar__button__highlight"
                : "navbar__button"
            }
            onClick={siteHandlerAddCard}
          />
        </li>
        <li className="navbar_li">
          <ProfileLogo
            className={
              currentPage === "Profile"
                ? "navbar__button navbar__button__highlight"
                : "navbar__button"
            }
            onClick={siteHandlerProfile}
          />
        </li>
      </ul>
    </nav>
  );
}

export { Navigation };
