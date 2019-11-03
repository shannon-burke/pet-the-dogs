import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import ImageSection from "./components/ImageSection";
import Dogs from "./Dogs.json";


class App extends Component {

  state = {
    Dogs,
    currentScore: 0,
    leftToWin: 9
  };

  render() {
    //console.log(this.state.currentScore);
    return (
      <div>
        <Header
          currentScore={this.state.currentScore}
          leftToWin={this.state.leftToWin}
        />
        <ImageSection>
          {this.state.Dogs.map(dog => (
            <ImageCard
              src={dog.src}
              alt={dog.alt}
            />
          ))}
        </ImageSection>
      </div>
    );
  }
}

export default App;
