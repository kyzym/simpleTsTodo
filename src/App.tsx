import React from "react";

import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <TodoItem
        id="1"
        completed={false}
        title="first todo"
        style={{ border: "1px solid white" }}
      />
    </div>
  );
}

export default App;
