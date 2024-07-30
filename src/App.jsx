import React from 'react';
import Citizens from './components/Citizens';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Citizens Management</h1>
      </header>
      <main>
        <Citizens />
      </main>
    </div>
  );
}

export default App;
