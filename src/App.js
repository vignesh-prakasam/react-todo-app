import React,{useState, useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState(() => {
    let todoList = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (todoList) {
      return JSON.parse(todoList);
    } else {
      return [];  
    }
  });
  const nameRef = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);


  const handleClick = () => {
    const name = nameRef.current.value;
    setTodos([...todos, {id: uuidv4(), name, complete: false}]);
    nameRef.current.value = '';
  }

  const toggleCompleted = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const clearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type='checkbox' checked={todo.complete} onChange={ ()=> {toggleCompleted(todo.id)} }/>
            {todo.name}
            <button onClick={() => setTodos(todos.filter(td => td.id !== todo.id))}> Remove </button>
          </li>
        ))}
      </ul>
      <input ref={nameRef} type="text" />
      <button onClick={handleClick}>Add</button>
      <br/>
      <button onClick={clearCompleted}>Clear complete</button>
    </div>
  );
}

export default App;
