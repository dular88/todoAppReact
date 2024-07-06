import React from 'react';

const TodoItem = ({ todo, index, toggleComplete, deleteTodo }) => {
  return (
    <tr>
      <td>{index}</td>
      <td
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.task}
      </td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
