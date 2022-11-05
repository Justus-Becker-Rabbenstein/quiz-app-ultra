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

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div className="App">
      <Header />
      <main className="app__main">
        <Cards cards={Cards} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Create currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Profile currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </main>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
