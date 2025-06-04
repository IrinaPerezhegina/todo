import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import styles from "../styles/TodoApp.module.scss";
import { ButtonWrapper, Status } from "./ButtonWraper";
import TodoList from "./TodoList";
import { InputField } from "./ui/InputField";

const TodoApp: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteCompleted } = useTodos();
  const [statusValue, setStatusValue] = useState<Status>("all");
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue("");
    }
  };

  const remainingCount = todos.filter((t) => !t.completed).length;

  return (
    <>
      <div className={styles.app}>
        <h1>todos</h1>
        <InputField
          handleAdd={handleAdd}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          statusValue={statusValue}
        />
        <ButtonWrapper
          remainingCount={remainingCount}
          deleteCompleted={deleteCompleted}
          statusValue={statusValue}
          setStatusValue={setStatusValue}
        />
      </div>
      <div className={styles.one} />
      <div className={styles.two} />
    </>
  );
};

export default TodoApp;
