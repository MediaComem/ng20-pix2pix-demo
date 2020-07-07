import React from 'react';
import './App.css';
import { ModelList } from './components/ModelList';
import { Pix2Pix } from './components/Pix2Pix';

function App() {
  return (
    <div className="App">
      <h1>Basic demo for ML5 Pix2Pix</h1>
      <main>
        <div className="sidebar">
          <h2>List of selectable model</h2>
          <ModelList></ModelList>
        </div>
        <div className="content">      
          <Pix2Pix></Pix2Pix>
        </div>
      </main>
    </div>
  );
}

export default App;
