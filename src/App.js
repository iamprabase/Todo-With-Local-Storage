import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

function App() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    getFromLocalStorage();
  }, [])

  useEffect(() => {
    setToLocalStorage(todos);
    return () => {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  }, [todos]);

  const setToLocalStorage = (value) => {
    localStorage.setItem("todos", JSON.stringify(value));
  };

  const getFromLocalStorage = () => {
    let currentTodos = JSON.parse(localStorage.getItem("todos"));
    if(currentTodos) settodos([...currentTodos]);
  }

  return (
    <>
      <Form todos={todos} settodos={settodos} />
      <TodoList todos={todos} settodos={settodos}/>
    </>
  );
}
export default App;
