import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index + 1}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
