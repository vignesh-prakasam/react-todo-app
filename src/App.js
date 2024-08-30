import React,{useState, useEffect, useRef} from 'react';

function App() {
  const [todos, setTodos] = useState([{name: 'Learn React', complete: false}]);
  const nameRef = useRef();

  const handleClick = () => {
    const name = nameRef.current.value;
    setTodos([...todos, {name, complete: false}]);
    nameRef.current.value = '';
  }

  return (
    <>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type='checkbox' />
            {todo.name}
          </li>
        ))}
      </ul>
      <input ref={nameRef} type="text" />
      <button onClick={handleClick}>Add</button>
      <br/>
      <button>Clear complete</button>
    </>
  );
}

export default App;
