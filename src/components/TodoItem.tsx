import React, { useState } from "react";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  style?: React.CSSProperties;
}

const TodoItem = ({ id, title, completed, style = {} }: TodoItemProps) => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <li style={{ color: "red", backgroundColor: "white", ...style }}>
      <input type="checkbox" checked={completed}>
        <span>{title}</span>
        <span>&times;</span>
      </input>
    </li>
  );
};

export default TodoItem;
