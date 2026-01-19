import React, {Component} from "react";

class ColorCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textcolor: "black",
            backcolor: "white",
        };
    }

    
    render(){
        return (
        <>
        <h3>for text color</h3>
        <button onClick={() => this.setState({ textcolor: "green"})}>green</button>
        <button onClick={() => this.setState({ textcolor: "blue"})}>blue</button>
        <button onClick={() => this.setState({ textcolor: "red"})}>red</button>
        <button onClick={() => this.setState({ textcolor: "yellow"})}>yellow</button>
        <br/>
        <h3>for background color</h3>
        <button onClick={() => this.setState({ backcolor: "green"})}>green</button>
        <button onClick={() => this.setState({ backcolor: "blue"})}>blue</button>
        <button onClick={() => this.setState({ backcolor: "red"})}>red</button>
        <button onClick={() => this.setState({ backcolor: "yellow"})}>yellow</button>

        <h2 style={{ color: this.state.textcolor, backgroundColor: this.state.backcolor }}>This is a color changer</h2>
        </>
        );
    }
}

export default ColorCard;