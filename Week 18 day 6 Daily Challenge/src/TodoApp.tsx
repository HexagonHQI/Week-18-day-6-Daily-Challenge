// src/TodoApp.tsx
import React, { useState } from 'react';
import { Todo } from './types';
import List from './List';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      text: `Todo item ${todos.length + 1}`
    };
    setTodos([...todos, newTodo]);
  };

  const renderTodo = (todo: Todo) => <span>{todo.text}</span>;

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={addTodo}>Add Todo</button>
      <List items={todos} renderItem={renderTodo} />
    </div>
  );
};

export default TodoApp;
