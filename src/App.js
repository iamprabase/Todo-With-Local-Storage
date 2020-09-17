import React from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <>
      <TodoContextProvider>
        <Form />
        <TodoList />
      </TodoContextProvider>
    </>
  );
}
export default App;
