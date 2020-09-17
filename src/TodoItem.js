import React, { useContext } from 'react'
import {TodoContext} from './contexts/TodoContext';

export default function TodoItem({ currentTodo }) {
  const { markCompleted, deleteTodo, editTodo } = useContext(TodoContext);

  return (
    <>
      <li key={currentTodo.id}>
        <input
          onChange={() => {markCompleted(currentTodo)}}
          data-key={currentTodo.id}
          className="checkbox"
          type="checkbox"
          checked={currentTodo.completed}
        />
        <span
          className={`todo-text ${currentTodo.completed ? "completed" : ""}`}
        >
          {" "}
          {currentTodo.title}
        </span>
        <button
          onClick={() => {deleteTodo(currentTodo)}}
          className="remove text-right"
        >
          <i className="fa fa-trash"></i>
        </button>
        <button
          onClick={() => {editTodo(currentTodo)}}
          className="edit text-right"
        >
          <i className="fa fa-edit"></i>
        </button>
        <hr />
      </li>
    </>
  );
}
