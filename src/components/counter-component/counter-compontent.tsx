import React, { useState } from "react";
import './counter-component.css';
import NationalityComponent from "../nationality-component/nationality-component";
import { getNationality } from "../../services/nationalize.service";
const CounterComponent = () =>{
  const [counter , setCounter] = useState<number>(0);
  const [name , setName] = useState<string>('');
  const [nationality , setNationality] = useState<string>('');

  const handleIncrease = () =>{
    setCounter(counter + 1) 
  }

  const handleDecrease = () =>{
    setCounter(counter - 1)
  }

  const handleNameInput = (ev: any)=>
  {
    setName(ev.target.value)
  }

  function handleNationalitySubmit(){
    getNationality(name).then((res)=>{setNationality(res.data.country[0].country_id)})
  }
  return (
    <div className='main-container'>
      <div className='text-container'>
        <p>{counter}</p>
      </div>
      <div className='button-container'>
        <button onClick={handleIncrease} className='button-styles'>Increase</button>
        <button onClick={handleDecrease} className='button-styles'>Decrease</button>
      </div>
      <div>
        <input type="text" value={name} onChange={handleNameInput}/>
      </div>
      <div>
        <button onClick={handleNationalitySubmit}>Get Nationality</button>
      </div>
      <div>{nationality}</div>
    </div>
  );
}

export default CounterComponent;