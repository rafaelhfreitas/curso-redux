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
        <Intervalo min={min} max={max}></Intervalo>        
      </div>
      <div className='Linha'>
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>
    </div>
  );
}

export default App;
