import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleAddTodo = () => {
    if (todoInput) {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1 className="title">To Do List</h1>
      <input type="text" className="todo-input" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button className="add" onClick={handleAddTodo}>Add</button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="delete" onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
