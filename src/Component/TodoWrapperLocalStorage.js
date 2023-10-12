import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TodoWrapperLocalStorage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));

  return (
    <div className="TodoWrapper">
      <h1>My Tasks !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        )
      )}
    </div>
  );

