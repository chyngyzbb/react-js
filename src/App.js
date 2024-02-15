import './App.css';
import Footer from './components/Footer';
// import Header from './components/Header';

import { useState } from 'react';


// props
// hooks -> 

function App() {
  const [counter, setCounter]=useState(0)
  const [color,setColor]=useState('')
  console.log(counter);
  const getValue=(num)=>{
    console.log(num);
}

  let arr=[1,2,3,4,5]
  return (
    
    <div className="App">
      <h1>Hello</h1>
      <h1>{counter}</h1>
      <button
      style={{
        background:color==="inc"?'yellow':'grey'
      }}
      onClick={()=>{
        setCounter(counter+1)
        setColor("inc")
      }}
      >increment</button>
      <button
        style={{
          background:color==="dec"?'yellow':'grey'
        }}
      onClick={()=>{
        setCounter(counter-1)
        setColor('dec')
      }}
      >decrement</button>
      {/* <Header
      
       getValue={getValue}
        arrou={arr} 
       text='Pello'/>  */}
        <Footer
        counter={counter}
        />
     </div> 
  )
}

export default App;
