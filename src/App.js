import React, { useState } from 'react';
import './App.css';

import Card from './components/Card'
import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

function App() {

  const [min, setMin] = useState(11)
  const [max, setMax] = useState(120)


  return (
    <div className="App">
      <h1>Exercicio React - Redux</h1>
      <div className='Linha'>
        <Intervalo min={min} max={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}></Intervalo>        
      </div>
      <div className='Linha'>
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
