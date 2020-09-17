import React, { useState, useEffect, createContext } from "react";

export const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todo, settodo] = useState({"title": "", "completed": true})
  const [todos, settodos] = useState([])

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    setToLocalStorage(todos);
    return () => {
      localStorage.setItem("todos", JSON.stringify([]));
    };
  }, [todos]);

  const setToLocalStorage = (value) => {
    localStorage.setItem("todos", JSON.stringify(value));
  };

  const getFromLocalStorage = () => {
    let currentTodos = JSON.parse(localStorage.getItem("todos"));
    if (currentTodos) settodos([...currentTodos]);
  };

  const handleChange = (e) => {
    if (todo.id) settodo({ title: e.target.value, completed: todo.completed, id: todo.id });
    else settodo({"title":e.target.value});
  };

  const handleSubmit = (e) => {
    if (todo.title.trim()) {
      if (todo.id) {
        settodos(
          todos.map((current) => {
            if (current.id === parseFloat(todo.id))
              return {
                ...current,
                title: todo.title,
              };

            return { ...current };
          })
        );
      } else {
        settodos([
          ...todos,
          { title: todo.title, completed: false, id: Math.random() * 9 },
        ]);
      }
      settodo({ title: "", completed: false, id: ""});
    }
  };

  const markCompleted = (value) => {
    console.log(value)
    settodos(
      todos.map((current) => {
        if (current.id === value.id)
          return {
            ...current,
            completed: !current.completed,
          };

        return { ...current };
      })
    );
  };

  const deleteTodo = value => {
    settodos(todos.filter((current) => current.id !== value.id));
    console.log('delete')
  };

  const editTodo = value => {
    settodo({ ...value });
  };

  return (
    <TodoContext.Provider
      value={{ todos, todo, handleChange, handleSubmit, markCompleted, deleteTodo, editTodo}}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider