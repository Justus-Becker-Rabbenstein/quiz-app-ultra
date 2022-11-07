//Librarays
import { useState } from "react";
//CSS
import "./App.css";
//Components
import { Header } from "./components/header/Header";
import { Cards } from "./pages/cards/Cards";
import { Navigation } from "./components/navigation/Navigation";
import { Create } from "./pages/create/Create";
import { Profile } from "./pages/profile/Profile";
import { Bookmark } from "./pages/bookmark/Bookmark";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [cardsArray, setCardsArray] = useState([
    {
      id: "0",
      question: "What does the fox say?",
      answer: "Banana.",
      isBookmarked: true,
      hideAnswer: "card__item hide",
      showAnswer: "card__item",
    },
    {
      id: "1",
      question: "To be or not to be?",
      answer: "To be.",
      isBookmarked: false,
      hideAnswer: "card__item hide",
      showAnswer: "card__item",
    },
    {
      id: "2",
      question: "Cheeseburger oder Pommes?",
      answer: "Cheesepommes.",
      isBookmarked: true,
      hideAnswer: "card__item hide",
      showAnswer: "card__item",
    },
    {
      id: "3",
      question: "Was ist der Sinn des Lebens?",
      answer: "Pommes.",
      isBookmarked: false,
      hideAnswer: "card__item hide",
      showAnswer: "card__item",
    },
    {
      id: "4",
      question: "Welche Farbe hat eine Zitrone?",
      answer: "Gelb.",
      isBookmarked: false,
      hideAnswer: "card__item hide",
      showAnswer: "card__item",
    },
  ]);

  return (
    <div className="App">
      <main className="app__main">
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
          key={cardsArray.id} />
        ) : (
          ""
        )}
        {currentPage === "addCard" ? (
          <Create currentPage={currentPage} setCurrentPage={setCurrentPage} />
        ) : (
          ""
        )}
        {currentPage === "Profile" ? (
          <Profile currentPage={currentPage} setCurrentPage={setCurrentPage} />
        ) : (
          ""
        )}
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </main>
    </div>
  );
}

export default App;
