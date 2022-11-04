//Librarays
import { useState} from "react";
//CSS
import "./App.css";
//Components
import { Header } from "./components/header/Header";
import { Card } from "./components/card/Card";
import { Navigation } from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="app__main">
        <Card />
        <Card />
        <Card />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
