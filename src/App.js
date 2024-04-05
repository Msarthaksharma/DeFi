import './App.css';
import About from './components/About/About';
import Developer from './components/Developer/Developer';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <About/>
     <Developer/>
     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default App;
