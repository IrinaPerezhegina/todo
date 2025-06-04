import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import styles from "../styles/TodoApp.module.scss";
import TodoList from "./TodoList";
import { InputField } from "./ui/InputField";

const TodoApp: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteCompleted } = useTodos();
  const [statusValue, setStatusValue] = useState("all");
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
        <div className={styles.filters}>
          <div className="">
            <span> {remainingCount} items left</span>
          </div>
          <div>
            <button
              className={
                statusValue === "all" ? styles.activeBtn : styles.noActiveBtn
              }
              onClick={() => setStatusValue("all")}
            >
              All
            </button>
            <button
              className={
                statusValue === "active" ? styles.activeBtn : styles.noActiveBtn
              }
              onClick={() => setStatusValue("active")}
            >
              Active
            </button>
            <button
              className={
                statusValue === "completed"
                  ? styles.activeBtn
                  : styles.noActiveBtn
              }
              onClick={() => setStatusValue("completed")}
            >
              Completed
            </button>
          </div>
          <div>
            <button className={styles.clear} onClick={deleteCompleted}>
              Clear completed
            </button>
          </div>
        </div>
      </div>
      <div className={styles.one} />
      <div className={styles.two} />
    </>
  );
};

export default TodoApp;
