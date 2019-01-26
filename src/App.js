import React, { Component } from "react";
import store from "./store";
import { observer } from "mobx-react";
import { decorate } from "mobx";
import "./App.css";
import TodoEntry from "./components/TodoEntry.js";
import TodoItems from "./components/TodoItems.js";
import TodoFooter from "./components/TodoFooter.js";
class App extends Component {
  
  render() {
    return (
      <div id="todoapp" className="todoapp">
        
        {/* <button onClick={() => store.clearCompleted()}>ClearComp</button>
        <button onClick={() => store.showAll()}>All+{" "}</button>
        <button onClick={() => store.showActive()}>Active+{" "}</button>
        <button onClick={() => store.showCompleted()}>Completed+{" "}</button> */}
        <TodoEntry />

        <TodoItems />
        {/* {a=>{if(a)
        {<TodoFooter/>}}} */}
      </div>
    );
  }
}
decorate(App, {
  App: observer
});

export default App;
