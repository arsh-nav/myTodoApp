import React, { Component } from "react";
import todoStore from "../store";
import store from "../store";
class TodoEntry extends Component {
  state = {
    value: ""
  };
  handleKeyDown = event => {
    if (event.keyCode !== 13) return;
    event.preventDefault();
    if(this.state.value.trim() !== "")
    todoStore.addTodo(this.state.value);
    // console.log(this.state.value)
    this.setState({
      value: ""
    });
    
  };
  render() {
    return (
      <header>
        
        <h1>todo</h1>
        <input
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
          onKeyDown={event => this.handleKeyDown(event)}
          type="text"
          className="new-todo"
          placeholder="what needs to be done"
        />
      </header>
    );
  }
}
export default TodoEntry;
