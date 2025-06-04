import React from "react";
import styles from "../styles/TodoList.module.scss";
import TodoItem from "./TodoItem";
interface TodoListProps {
  title?: string;
  todos: { id: number; text: string; completed: boolean }[];
  onToggle: (id: number) => void;
  statusValue: string;
}

const TodoList: React.FC<TodoListProps> = ({
  statusValue,
  title,
  todos,
  onToggle,
}) => {
  return (
    <div className={styles.wrapper}>
      {title && <h3>{title}</h3>}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            statusValue={statusValue}
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
