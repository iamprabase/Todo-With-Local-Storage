import React from 'react'

export default function TodoItem({ todo, todos, settodos }) {

  const markCompleted = (e) => {
    settodos(
      todos.map(current => {
        if (current.id === todo.id) return {
          ...current, completed : !current.completed
        }

        return {...current};
      })
    );
  } 

  const deleteTodo = (e) => {
    settodos(todos.filter(current => current.id !== todo.id));
  }

  const editTodo = (e) => {
    console.log("Edit");
  }

  return (
    <>
      <li key={todo.id}>
        <input
          onChange={markCompleted}
          className="checkbox"
          type="checkbox"
          checked={todo.completed}
        />
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
          {" "}
          {todo.title}
        </span>
        <button onClick={deleteTodo} className="remove text-right">
          <i className="fa fa-trash"></i>
        </button>
        <button onClick={editTodo} className="edit text-right">
          <i className="fa fa-edit"></i>
        </button>
        <hr />
      </li>
    </>
  );
}
