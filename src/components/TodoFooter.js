import { observer } from "mobx-react";
import { decorate } from "mobx";
import store from "../store";
import React,{Component} from 'react';

export default class TodoFooter extends Component {
  render() {
    return (
      <footer class="footer">
        <span class="todo-count">
          <strong>{store.itemsTotal}</strong> item left
        </span>

        <ul class="filters">
          <li onClick={() => store.showAll()}>
            <a class="selected" href="#/">
              All
            </a>
          </li>
          <li onClick={() => store.showActive()}>
            <a href="#/">Active</a>
          </li>
          <li onClick={() => store.showCompleted()}>
            <a href="#/">Completed</a>
          </li>
        </ul>

        <button class="clear-completed" onClick={() => store.clearCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  }
}
decorate(TodoFooter, {
    TodoFooter: observer
  });
