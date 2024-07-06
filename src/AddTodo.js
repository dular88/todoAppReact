import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddTodo;
