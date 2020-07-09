import React from 'react';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

interface TodoItemProps {
  todoItem: Todo;
  handleDelete: () => void;
  changeStatus: () => void;
}

const TodoItem = (props: TodoItemProps) => {
  const todoItem: Todo = props.todoItem;
  return (
    <li key={todoItem.id} className={`row ${todoItem.completed ? 'done' : ''}`}>
      <label className={`content ${todoItem.completed ? 'strike' : ''}`}>
        <input
          type="checkbox"
          checked={todoItem.completed}
          onChange={props.changeStatus}
        />
        {todoItem.content}
      </label>

      <div className="delete-button">
        <button onClick={props.handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
