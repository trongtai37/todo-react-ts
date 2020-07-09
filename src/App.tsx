import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>My Todo App</h1>
      </div>
      <TodoList />
      <footer>Made by @trongtai37</footer>
    </div>
  );
}

export default App;
