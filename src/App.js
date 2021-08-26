import React, { useState } from 'react';

function App() {
  const [text, setText] = useState(' ');
  const [item, setItem] = useState([]);

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') {
      return;
    }
    setItem([text, ...item]);
    setText(' ');
  };

  const todoDelete = (name, i) => {
    const todos = item.slice();
    todos.splice(i, 1);
    setItem(todos);
  };

  console.log(item);

  // console.log(text);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add</button>
        <Todo item={item} todoDelete={todoDelete} />
      </form>
    </div>
  );
}

export default App;

function Todo(props) {
  return (
    <div>
      {props.item.map((items, index) => {
        return (
          <li onClick={() => props.todoDelete(items, index)} key={index}>
            {items}
          </li>
        );
      })}
    </div>
  );
}
