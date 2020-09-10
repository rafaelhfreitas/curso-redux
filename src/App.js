import React from 'react';
import './App.css';

import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>Exercicio React - Redux</h1>
      <div className='Linha'>
        <Card title="Card 1" red> 
          X
        </Card>        
      </div>
      <div className='Linha'>
        <Card title="Card 3" blue>
          Y
        </Card>
      </div>
    </div>
  );
}

export default App;
