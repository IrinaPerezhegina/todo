import { useState } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
const initialTodos: Todo[] = [
  { id: 1, text: "Тестовое задание", completed: false },
  { id: 2, text: "Покрытие тестами", completed: false },
  { id: 3, text: "Прекрасный код", completed: false },
  { id: 4, text: "Закончен проект", completed: true },
];
export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev: Todo[]) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const remainingCount = (prev: Todo[]) =>
    prev.filter((todo) => !todo.completed).length;

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteCompleted,
    remainingCount,
  };
}
