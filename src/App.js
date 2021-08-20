import React from 'react';
import './App.css';
import Interaction from './components/Interaction';
import 'firebase/auth';
import Login from './components/Login';


function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <Login />
        <Interaction />
      </div>
    </div>
  );
}

export default App;
