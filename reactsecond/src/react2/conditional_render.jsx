import React, {Component} from "react";

class Rendercard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
        };
    }

    toggle = () => {
        this.setState({ isOn: !this.state.isOn });
    };
    render(){
        return (
        <>
        <div style={{ backgroundColor: this.state.isOn ? "lightgreen" : "lightcoral", border: "1px solid black", padding: "400px", width: "400px", textAlign: "center" }}>
        <button style={{ backgroundColor: this.state.isOn ? "green" : "red", padding: "20px 20px" }} onClick={this.toggle}>
            {this.state.isOn ? "ON" : "OFF"}
        </button>
        {this.state.isOn ? <h2>The button is active</h2> : <h2>The button is inactive</h2>}
        </div>
        </>
        );
    }
}

export default Rendercard;