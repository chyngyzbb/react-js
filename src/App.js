import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import { useState } from 'react';


// props
// hooks -> useState

function App() {
  const [counter, setCounter]=useState(0)
  const [color,setColor]=useState(true)
  console.log(counter);
  const getValue=(num)=>{
    console.log(num);
}

  let arr=[1,2,3,4,5]
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button
      onClick={()=>setCounter(counter+1)}
      >plus</button>
      <button
      onClick={()=>setCounter(counter-1)}
      >minus</button>
      <Header
       getValue={getValue}
        arrou={arr} 
       text='Pello'/> 
        <Footer/>
     </div> 
  )
}

export default App;
