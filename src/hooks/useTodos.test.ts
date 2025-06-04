import { act, renderHook } from "@testing-library/react";
import { useTodos } from "./useTodos";

describe("useTodos", () => {
  it("должен инициализировать с начальными задачами", () => {
    const { result } = renderHook(() => useTodos());
    expect(result.current.todos).toHaveLength(4);
    expect(result.current.todos[3].completed).toBe(true);
  });

  it("должен добавлять новую задачу", () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo("Новая задача");
    });
    expect(result.current.todos).toHaveLength(5);
    expect(result.current.todos[4].text).toBe("Новая задача");
  });

  it("должен переключать статус задачи", () => {
    const { result } = renderHook(() => useTodos());
    const firstTodoId = result.current.todos[0].id;
    const initialCompleted = result.current.todos[0].completed;

    act(() => {
      result.current.toggleTodo(firstTodoId);
    });

    const updatedTodo = result.current.todos.find((t) => t.id === firstTodoId);
    expect(updatedTodo?.completed).toBe(!initialCompleted);
  });

  it("должен удалять выполненные задачи", () => {
    const { result } = renderHook(() => useTodos());

    // Перед удалением убедимся, что есть выполненные задачи
    expect(result.current.todos.some((t) => t.completed)).toBe(true);

    act(() => {
      result.current.deleteCompleted();
    });

    // После удаления все задачи должны быть не выполнены
    expect(result.current.todos.every((t) => !t.completed)).toBe(true);
  });

  it("должен считать оставшиеся задачи", () => {
    const { result } = renderHook(() => useTodos());

    // Проверка функции remainingCount
    const count = result.current.remainingCount(result.current.todos);

    // В начальных данных осталось 3 невыполненных
    expect(count).toBe(3);
  });
});
