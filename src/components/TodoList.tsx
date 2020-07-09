import React, { Component } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import IdGenerator from '../data/IdGenerator';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

interface State {
  todoList: Todo[];
}

// Mocking Todo List
const todoList: Todo[] = [
  {
    id: 1,
    content: 'Go shopping',
    completed: false,
  },
  {
    id: 2,
    content: 'Learning ReactJS',
    completed: false,
  },
  {
    id: 3,
    content: 'Doing Exercises',
    completed: true,
  },
  {
    id: 4,
    content: 'Doing homework',
    completed: false,
  },
  {
    id: 5,
    content: 'Playing games :)',
    completed: false,
  },
];

export default class TodoList extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todoList,
    };
  }

  handleDelete = (id: number) => {
    let todoList: Todo[] = this.state.todoList;
    todoList = todoList.filter((todo: Todo) => todo.id !== id);
    this.setState({
      todoList,
    });
  };

  changeStatus = (id: number) => {
    let todoList: Todo[] = this.state.todoList;
    let index = todoList.findIndex((todo) => todo.id === id);
    if (index >= 0) {
      Object.assign(todoList[index], { completed: !todoList[index].completed });
      this.setState({
        todoList,
      });
    }
  };

  handleAdd = (content: string) => {
    if (!content) return;

    let todo: Todo = {
      id: IdGenerator.next().value,
      content,
      completed: false,
    };

    let todoList: Todo[] = this.state.todoList;
    todoList.push(todo);
    this.setState({
      todoList,
    });
  };

  render() {
    let todoList: Todo[] = this.state.todoList;
    let total: number = todoList.length;
    let done: number = todoList.filter((todo) => todo.completed).length;
    return (
      <>
        <AddTodo handleAdd={this.handleAdd} />
        <div className="statistic">
          <div className="total">{`Total: ${total}`}</div>
          <div className="resolved">{`Done: ${done}`}</div>
          <div className="in-progress">{`In-Progress: ${total - done}`}</div>
        </div>
        <div className="todo-container">
          <ul className="todo-list">
            {todoList.map((todo: Todo) => (
              <TodoItem
                todoItem={todo}
                handleDelete={() => this.handleDelete(todo.id)}
                changeStatus={() => this.changeStatus(todo.id)}
              />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
