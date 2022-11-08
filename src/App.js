//Librarays
import { useState, useContext } from "react";
//CSS
import "./App.css";
//Components
import { Header } from "./components/header/Header";
import { Cards } from "./pages/cards/Cards";
import { Navigation } from "./components/navigation/Navigation";
import { Create } from "./pages/create/Create";
import { Profile } from "./pages/profile/Profile";
import { Bookmark } from "./pages/bookmark/Bookmark";
import { GlobalState } from "./context/GlobalState";
import { GlobalStateContext } from "./context/GlobalState";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [cardsArray, setCardsArray] = useState([
    {
      id: "0",
      question: "What does the fox say?",
      answer: "Banana.",
      isBookmarked: true,
    },
    {
      id: "1",
      question: "To be or not to be?",
      answer: "To be.",
      isBookmarked: false,
    },
    {
      id: "2",
      question: "Cheeseburger oder Pommes?",
      answer: "Cheesepommes.",
      isBookmarked: true,
    },
    {
      id: "3",
      question: "Was ist der Sinn des Lebens?",
      answer: "Pommes.",
      isBookmarked: false,
    },
    {
      id: "4",
      question: "Welche Farbe hat eine Zitrone?",
      answer: "Gelb.",
      isBookmarked: false,
    },
  ]);

  return (
    <div className="App">
      <main className="app__main">
        <GlobalState>
          <Header />
          {currentPage === "Home" ? (
            <Cards
              cards={Cards}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              cardsArray={cardsArray}
              setCardsArray={setCardsArray}
              key={cardsArray.id}
            />
          ) : (
            ""
          )}
          {currentPage === "Bookmark" ? (
            <Bookmark
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              cardsArray={cardsArray}
              setCardsArray={setCardsArray}
              key={cardsArray.id}
            />
          ) : (
            ""
          )}
          {currentPage === "addCard" ? (
            <Create currentPage={currentPage} setCurrentPage={setCurrentPage} />
          ) : (
            ""
          )}
          {currentPage === "Profile" ? (
            <Profile
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            ""
          )}
          <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </GlobalState>
      </main>
    </div>
  );
}

export default App;
