import React from "react";

export default function Todo({todo, toggleCompleted, removeTodo}) {
  return (
    <li key={todo.id}>
      <input type='checkbox' checked={todo.complete} onChange={ ()=> {toggleCompleted(todo.id)} }/>
      {todo.name}
      <button onClick={() => removeTodo(todo.id)}> Remove </button>
    </li>
  );

}


