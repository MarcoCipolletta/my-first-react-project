import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';
import './TodoList.scss';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo }) => {
  return (
  <div>
    <h3>Da fare</h3>
        <ul className="todo-list">
          {todos.map(todo => !todo.completed? (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ): null)}
        </ul>
    <h3>Completati</h3>
    <ul className="todo-list">
          {todos.map(todo => todo.completed? (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ): null)}
        </ul>
  </div>
  );
};

export default TodoList;
