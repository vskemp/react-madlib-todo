import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

function App() {
  return (
    <div>
      <h1>ToDo List:</h1>
      <Todo what="Clean The Kitchen" />
      <Todo what="Buy Mayonaise" />
      <Todo what="Die" />
    </div>
  );
}

export default App;
