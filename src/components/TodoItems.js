import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoStore from "../store";
import { observer } from "mobx-react";
import { decorate } from "mobx";
import TodoFooter from "../components/TodoFooter.js";

class TodoItems extends Component {
  callback() {
    if (todoStore.allItems.length !== 0) {
      return <TodoFooter />;
    }
  }
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {todoStore.todos.map(todo => {
            return <TodoItem todo={todo} />;
          })}
          {this.callback()}
        </ul>
      </section>
    );
  }
}
decorate(TodoItems, {
  TodoItems: observer
});
export default TodoItems;
