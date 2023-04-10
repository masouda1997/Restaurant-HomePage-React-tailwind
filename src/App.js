import './App.css';
import Category from './components/Category';
import Food from './components/Food';
import HeadLineCarts from './components/HeadLineCarts';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {
  return(
    <>
    <Navbar/>
    <Hero/>
    <HeadLineCarts/>
    <Food/>
    <Category/>
    </>

  ) 
}

export default App;
