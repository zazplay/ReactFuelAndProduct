import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [getDistance, setDistance] = useState(0);
  const [getAvgConsumption, setAvgConsumption] = useState(0);
  const [getFuelCost, setFuelCost] = useState(0);
  const [getConsumption, setConsumption] = useState(0);

const getRezConst = () => {
  
  const rezult = ((getDistance/100)*getAvgConsumption)*getFuelCost;
  setConsumption (rezult.toFixed(2));



}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Калькулятор расхода топлива</h1>
        <div className='inputDiv'>
            <label for="gradient-input" class="gradient-label">Введите расстояние поездки: </label>
            <input type="number" value={getDistance} class="gradient-input" onChange={(e) => setDistance(e.target.value)} min={0}/>
        </div>

        <div className='inputDiv'>
            <label for="gradient-input" class="gradient-label">Введите расход топлива на 100 км: </label>
            <input type="number" value={getAvgConsumption} class="gradient-input"  onChange={(e) => setAvgConsumption(e.target.value)} min={0}/>
        </div>

        <div className='inputDiv'>
            <label for="gradient-input" class="gradient-label">Введите стоимсть топлива 1л/грн: </label>
            <input type="number" value={getFuelCost} class="gradient-input" onChange={(e) => setFuelCost(e.target.value)}  min={0}/>
            
        </div>
        <div>
        <button onClick={() => getRezConst()}  className="buttonRez"  >   Получить результат   </button>
        <label for="gradient-input" className="gradientRez"> {getConsumption} UAH</label>
        </div>
      </header>
    </div>
  );
}

export default App;
