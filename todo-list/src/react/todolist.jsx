import React, { Component } from "react";

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
        todos: [],
        inputvalue: "",
        };
    }

    handleinput = (e) => {
        this.setState({ inputvalue: e.target.value });
    };

    addtodo = () => {
        if (this.state.inputvalue.trim() === "") return;
        const newtodo = 
        {
            id: Date.now(),
            text: this.state.inputvalue,
        };
        
        this.setState((prevState) => ({
        todos: [...prevState.todos, newtodo],
        inputvalue: "",
        }));
    };

    render() {
        const { todos, inputvalue } = this.state;
        return (
        <>
            <input type="text" value={inputvalue} onChange={this.handleinput} />
            <br />
            <button onClick={this.addtodo}>Add</button>
            <ul>
            {
            todos.map((x) => 
            {
                return <li key={x.id}>{x.text}</li>;
            })
            }
            </ul>
        </>
        );
    }
}

export default Todolist;