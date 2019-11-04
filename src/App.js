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
    leftToWin: Dogs.length
  };

  scramble() {
    console.log("scramble");
  };

  increaseScore() {
    this.setState({ currentScore: this.state.currentScore + 1 });
    this.setState({ leftToWin: this.state.leftToWin - 1 });
    //console.log("increased score to" + this.state.currentScore);
  };


  gameWin() {
    alert("Good job! You petted all the doggos. Now, do it again!");
    this.gameReset();
  };

  gameReset() {
    this.setState({ currentScore: 0 });
    this.setState({ leftToWin: Dogs.length });
  };

  clickFunction = id => {
    //console.log(this);
    this.increaseScore();
    if (this.state.currentScore < Dogs.length) {
      this.scramble();
      //console.log(this.state.currentScore);
    }
    else {
      this.gameWin();
    };


  };

  render() {
    console.log(this.state.currentScore);
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
                clickFunction={this.clickFunction}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
