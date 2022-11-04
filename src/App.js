//Librarays
import { useState } from "react";
//CSS
import "./App.css";
//Components
import { Header } from "./components/header/Header";
import { Card } from "./components/card/Card";
import { Navigation } from "./components/navigation/Navigation";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div className="App">
      <Header />
      <main className="app__main">
        <Card />
        <Card />
        <Card />
      </main>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
