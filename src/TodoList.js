import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, settodos }) {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="main-todo-input-wrap">
            <div className="main-todo-input fl-wrap todo-listing">
              <ul className="list-items">
                {todos.length > 0 && todos.map(todo => {
                  return (
                    <TodoItem todo={todo} todos={todos} settodos={settodos} key={todo.id} />
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
