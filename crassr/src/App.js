import React from 'react';
import AppRouter from './routes/index';
import './App.css';

function App(props) {

  console.log("reached desktop app")
  return (
    <AppRouter />
  );
}

export default App;
