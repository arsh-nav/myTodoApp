import React, { Component } from "react";
import { observer } from "mobx-react";
import { decorate } from "mobx";
import store from "../store";
class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };
  render() {
    const { todo } = this.props;

    return (
      <div>
        <li className={todo.completed ? "completed" : " "}>
          <div className="view">
            <input
              onChange={this.onToggle}
              type="checkbox"
              className="toggle"
              value="on"
              checked={todo.completed}
            />
            <label>{todo.title}</label>
            <div>
              <button
                className="destry"
                onClick={() => store.delACompleted(todo.id)}
                style={{
                  float: "right",
                  transform: "translateY(-40px)",
                  marginRight: "10px"
                }}
              >
                <img
                  src="Icons/cancel.png"
                  style={{
                    maxWidth: "25px"
                  }}
                />
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
decorate(TodoItem, {
  TodoItem: observer
});
export default TodoItem;
