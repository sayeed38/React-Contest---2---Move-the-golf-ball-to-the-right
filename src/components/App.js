import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,//variable needed to be changed
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderChoice.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    //call back function
    buttonClickHandler() {
		this.setState({renderBall:true});
	}
    renderChoice() {
		if(this.state.renderBall){return <div className="ball" style={this.state.ballPosition}></div>}
		 else   return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
    }
	
	handleResize = (event) => {
		if(event.keyCode === 39){
			let position = this.state.posi;
			position += 5;
			this.setState { posi : position, ballPosition : {left : `${position}px`}};
		}
	}

    //bind ArrowRight keydown event
    componentDidMount() {
      window.addEventListener('onKeyPress', (event) => this.handleResize(event));
    }

    render() {
        return (
            <div className="playground">
                {this.renderChoice()}
            </div>
        )
    }
}


export default App;
