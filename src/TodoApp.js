import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import { Container } from 'react-bootstrap';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  // Read from local storage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    console.log('Reading from local storage:', savedTodos);
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos);
        console.log('Parsed todos:', parsedTodos);
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos);
        } else {
          console.error('Parsed todos is not an array');
        }
      } catch (e) {
        console.error('Error parsing todos from local storage:', e);
      }
    }
  }, []); // Empty dependency array ensures this runs once on mount

  // Save to local storage whenever todos change
  useEffect(() => {
    if (todos.length > 0) {
      console.log('Saving to local storage:', todos); // Log local storage save
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]); // Dependency array with todos ensures this runs whenever todos change

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      console.log('Updated todos after add:', updatedTodos);
      return updatedTodos;
    });
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      console.log('Updated todos after toggle:', updatedTodos);
      return updatedTodos;
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      console.log('Updated todos after delete:', updatedTodos);
      return updatedTodos;
    });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  console.log('Filtered todos:', filteredTodos);

  return (
    <Container>
      <h1 className="my-4">Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default TodoApp;
