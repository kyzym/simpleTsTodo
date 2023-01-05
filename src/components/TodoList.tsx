import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
}

export const TodoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => {
  console.log(todos);
  return (
    <ul>
      {todos.map(({ completed, id, title }: Todo) => {
        return (
          <TodoItem
            id={id}
            completed={completed}
            title={title}
            style={{ border: "1px sold white" }}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};
