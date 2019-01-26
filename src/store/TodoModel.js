import { observable, action, decorate } from "mobx";
import store from "./index.js";
export default class TodoModel {
  store;
  id;
  title;
  completed;

  constructor(store, title, completed, id) {
    this.title = title;
    this.completed = completed;
    this.id = id;
    this.store = store;
  }

  toggle() {
    if (!this.completed) this.store.itemsTotal--;
    else this.store.itemsTotal++;
    this.completed = !this.completed;
    if (this.store.flagActive === 1) {
        this.store.showActive();
        // this.store.flagActive = 0;
      } else if (this.store.flagActive === 2) {
        this.store.showCompleted();
        // this.store.flagActive = 0;
      }
  }
}

decorate(TodoModel, {
  title: observable,
  completed: observable,
  toggle: action
});
