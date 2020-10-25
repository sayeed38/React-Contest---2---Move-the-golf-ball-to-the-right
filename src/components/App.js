import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  //call back function
  buttonClickHandler() {
    this.setState({ renderBall: true });
    //console.log(this.state.renderBall);
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  handleResize = (event) => {
    //console.log(event.keyCode);
    if (event.keyCode === 39) {
      console.log(event.keyCode);
      this.setState({ posi: this.state.posi + 5 });
      this.setState({ ballPosition: { left: this.state.posi + "px" } });
      //console.log(this.state);
    }
  };

  //bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", (event) => this.handleResize(event));
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
