import React, { useState } from 'react';

const ToDoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Alex Johnson', email: 'alex@example.com', phone: '555-555-5555' }
  ]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate a unique ID for the new todo item
    const id = todos.length + 1;

    // Create a new todo object
    const newTodo = { id, name, email, phone };

    // Update the todos state with the new todo
    setTodos([...todos, newTodo]);

    // Clear the input fields
    setName('');
    setEmail('');
    setPhone('');
  };

  const handleRemove = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <label>
          Phone:
          <input type="text" value={phone} onChange={handlePhoneChange} required />
        </label>
        <button type="submit">Add Todo</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.name}</td>
              <td>{todo.email}</td>
              <td>{todo.phone}</td>
              <td>
                <button onClick={() => handleRemove(todo.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoApp;
