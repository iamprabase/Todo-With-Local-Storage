import React, { useContext } from 'react'
import { TodoContext } from './contexts/TodoContext'

export default function Form() {
  const { todo, handleChange, handleSubmit } = useContext(TodoContext);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="main-todo-input-wrap">
            <div className="main-todo-input fl-wrap">
              <div className="main-todo-input-item">
                <input
                  onChange={handleChange}
                  value={todo.title}
                  type="text"
                  id="todo-list-item"
                  placeholder="What will you do today?"
                />
                <input type="hidden" value={todo.id}/>
              </div>
              <button
                onClick={handleSubmit}
                className="add-items main-search-button"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
