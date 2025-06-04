import { Circle, CircleCheckBig } from "lucide-react";
import React from "react";
import styles from "../styles/TodoItem.module.scss";
interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  onToggle: (id: number) => void;
  statusValue: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ statusValue, todo, onToggle }) => (
  <li
    className={
      statusValue === "all"
        ? styles.item
        : statusValue === "active" && !todo.completed
        ? styles.item
        : statusValue === "completed" && todo.completed
        ? styles.item
        : styles.none
    }
  >
    <label htmlFor={"todo-input" + todo.id}>
      {todo.completed ? (
        <CircleCheckBig size={40} color={todo.completed && "green"} />
      ) : (
        <Circle size={40} />
      )}
    </label>

    <input
      id={"todo-input" + todo.id}
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
    />
    <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
    </span>
  </li>
);

export default TodoItem;
