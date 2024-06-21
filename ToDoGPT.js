import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask.trim() !== '') {
      setTasks([...tasks, currentTask]);
      setCurrentTask(''); 
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTask}
          onChange={handleChange}
          placeholder="Enter text"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
