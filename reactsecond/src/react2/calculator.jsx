import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "", 
    };
  }

  
  handleClick = (value) => {
    const { display } = this.state;

    if (value === "C") {
      
      this.setState({ display: "" });
    } else if (value === "=") {
      
      try {
        const result = eval(display);
        this.setState({ display: result.toString() });
      } catch (error) {
        this.setState({ display: "Error" });
      }
    } else {
      this.setState({ display: display + value });
    }
  };


  renderButton = (value) => (
    <button onClick={() => this.handleClick(value)}>{value}</button>
  );

  render() {
    return (
      <div>
      
        <input type="text" readOnly value={this.state.display || "0"} />

     
        <div>
          <div>
            {this.renderButton("C")}
            {this.renderButton("/")}
            {this.renderButton("*")}
            {this.renderButton("-")}
          </div>

          <div>
            {this.renderButton("7")}
            {this.renderButton("8")}
            {this.renderButton("9")}
            {this.renderButton("+")}
          </div>

          <div>
            {this.renderButton("4")}
            {this.renderButton("5")}
            {this.renderButton("6")}
            {this.renderButton("=")}
          </div>

          <div>
            {this.renderButton("1")}
            {this.renderButton("2")}
            {this.renderButton("3")}
            {this.renderButton(".")}
          </div>

          <div>
            {this.renderButton("0")}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
