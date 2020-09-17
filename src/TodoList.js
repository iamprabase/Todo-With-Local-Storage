import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from './contexts/TodoContext'

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="main-todo-input-wrap">
            <div className="main-todo-input fl-wrap todo-listing">
              <ul className="list-items">
                {todos.length > 0 && todos.map(currentTodo => {
                  return (
                    <TodoItem currentTodo={currentTodo} key={currentTodo.id} />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
