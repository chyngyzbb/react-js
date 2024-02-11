import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';


// props

function App() {

  const getValue=(num)=>{
    console.log(num);
}

  let arr=[1,2,3,4,5]
  return (
    <div className="App">
      <h1>hello world</h1>
      <Header 
      getValue={getValue}
      arrou={arr} 
      text='Pello'/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App;
