import { observable, action, decorate } from "mobx";
import TodoModel from "./TodoModel";
class Store {
  todos = [];
  lastID = 0;
  itemsTotal = 0;
  completedItems = [];
  notCompletedItems = [];
  allItems = [];
  flag = false;
  flagActive = 0;

  addTodo(title) {
    if (this.flag) {
      this.todos = this.allItems;
      this.flag = false;
    }
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
    this.itemsTotal = this.itemsNum();
    this.saveTodos();
    if (this.flagActive === 1) {
      this.showActive();
      this.flagActive = 0;
    } else if (this.flagActive === 2) {
      this.showCompleted();
      this.flagActive = 0;
    }
  }

  delACompleted(id2) {
    this.todos = this.todos.filter(todo => id2 !== todo.id);
    this.itemsTotal = this.itemsNum();
    this.saveTodos();
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
    this.saveTodos();
  }

  showAll() {
    this.todos = this.allItems;
    this.flag = false;
    this.flagActive = 0;
  }
  showActive() {
    this.completedItems = this.allItems.filter(todo => todo.completed);
    this.todos = this.allItems.filter(todo => !todo.completed);
    this.allItems = [...this.completedItems, ...this.todos];
    this.flag = true;
    this.flagActive = 1;
  }
  showCompleted() {
    this.notCompletedItems = this.allItems.filter(todo => !todo.completed);
    this.todos = this.allItems.filter(todo => todo.completed);
    this.allItems = [...this.notCompletedItems, ...this.todos];
    this.flag = true;
    this.flagActive = 2;
  }
  saveTodos() {
    this.allItems = this.todos;
  }
  itemsNum() {
    let itemTotal = 0;
    this.todos.map(todo => {
      if (!todo.completed) itemTotal++;
    });
    return itemTotal;
  }

  showFooter() {
    if (this.todos.length !== 0) return true;
    else return false;
  }
}

decorate(Store, {
  todos: observable,
  addTodo: action,
  itemsTotal: observable,
  time: observable,
  pauseClock: action,
  startClock: action,
  clearCompleted: action,
  delACompleted: action,
  itemsNum: action,
  showFooter: action
});

const store = new Store();
export default store;
