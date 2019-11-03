import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
//import ImageSection from "./components/ImageSection";
import Dogs from "./Dogs.json";


class App extends Component {

  state = {
    Dogs,
    currentScore: 0,
    leftToWin: 9
  };

  randomizer() {

  };

  increaseScore() {
    this.setState({ currentScore: this.state.currentScore + 1 })
    console.log("increased score to" + this.state.currentScore)
  };


  gameWin() {

  };

  gameReset() {

  };

  clickFunction(id) {
    console.log("test");
    console.log(id);
  };

  render() {
    //console.log(this.state.currentScore);
    this.clickFunction();
    return (
      <div>
        <Header
          currentScore={this.state.currentScore}
          leftToWin={this.state.leftToWin}
        />
        <div className="container">
          <div className="row">
            {this.state.Dogs.map(dog => (
              <ImageCard
                src={dog.src}
                alt={dog.alt}
                key={dog.id}
                id={dog.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
