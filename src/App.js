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

  return (
    <div className="App">
      <main className="app__main">
        <Header />
        {currentPage === "Home" ? (
          <Cards
            cards={Cards}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          ""
        )}
        {currentPage === "Bookmark" ? (
          <Bookmark currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
