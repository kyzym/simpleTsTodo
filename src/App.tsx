import { useState } from "react";
import { useEffect } from "react";

import { Todo } from "./types";
import NewTodoForm from "./components/NewTodoForm";

import "./App.css";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    if (
      todos.some(
        (todo) => todo.title.toLowerCase() === newTodo.title.toLowerCase()
      )
    ) {
      return alert("todo already exist");
    }
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const deleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10")
      .then((res) => res.json())
      .then((data: Todo[]) => {
        setTodos(data);
      });
  }, []);

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
