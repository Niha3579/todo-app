javascript
import React, { useState } from 'react';
import Todo from './Todo';
const TodoList = () => {
 const [todos, setTodos] = useState([]);
 const [inputValue, setInputValue] = useState('');
 const addTodo = () => {
 if (inputValue.trim() !== '') {
49
 setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
 setInputValue('');
 }
 };
 const toggleComplete = (id) => {
 setTodos(
 todos.map(todo =>
 todo.id === id ? { ...todo, completed: !todo.completed } : todo
 )
 );
 };
 const removeTodo = (id) => {
 setTodos(todos.filter(todo => todo.id !== id));
 };
 return (
 <div>
 <h1>Todo List</h1>
 <input
 type="text"
 value={inputValue}
 onChange={(e) => setInputValue(e.target.value)}
 placeholder="Add a new todo"
 />
 <button onClick={addTodo}>Add</button>
 <div>
 {todos.map(todo => (
 <Todo
 key={todo.id}
 todo={todo}
 toggleComplete={toggleComplete}
 removeTodo={removeTodo}
 />
 ))}
 </div>
 </div>
 );
};
export default TodoList;