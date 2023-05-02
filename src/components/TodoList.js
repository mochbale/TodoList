import React, { useState } from 'react';
import { MdPlaylistAdd } from 'react-icons/md';

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
    const task = todos[index];
    const confirmDelete = window.confirm(`Apakah anda yakin sudah menyelesaikan task tersebut: "${task}"?`); // menampilkan dialog konfirmasi dengan isi tugas
    if (confirmDelete) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  };
  

  return (
    <div>
      <h1 className="title"><MdPlaylistAdd className="icon" />To Do List</h1>
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

      <footer className="footer">
      <p>Created by <a href="https://www.instagram.com/michaelwilliam_14/">Michael William</a></p>
      
    </footer>
    </div>
  );
}

export default TodoList;
