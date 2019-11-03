import React from "react";
import "./App.css";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import dogs from "dogs.json";

function App() {

  state = {
    dogs,
    currentScore: 0,
    leftToWin: 9
  };

  return (
    <div className="container">
      <Header
        currentScore={this.state.currentScore}
        leftToWin={this.state.leftToWin}
      />

      {this.state.dogs.map(dog => (
        <ImageCard
          src={dog.src}
          alt={dog.src}
        />
      ))}

    </div>
  );
}

export default App;
