import React, { useState } from 'react'

export default function Form({ todos, settodos }) {
  const [todo, settodo] = useState("");

  const handleChange = (e) => {
    settodo(e.target.value);
  }

  const handleSubmit = (e) => {
    if (todo.trim()) {
      settodos([
        ...todos, { 'title': todo, 'completed': false, 'id': Math.random() * 9 }
      ]);
      settodo("");
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="main-todo-input-wrap">
            <div className="main-todo-input fl-wrap">
              <div className="main-todo-input-item">
                <input
                  onChange={handleChange}
                  value={todo}
                  type="text"
                  id="todo-list-item"
                  placeholder="What will you do today?"
                />
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
