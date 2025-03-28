import React from 'react';
import { Todo } from '../types';
import './TodoItem.scss';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className="todo-item">
      <span
        className={todo.completed ? 'completed' : ''}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Rimuovi</button>
    </li>
  );
};

export default TodoItem;
