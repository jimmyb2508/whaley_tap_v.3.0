import NavBar from './components/Navbar';
import Carousel from './components/Carousel';
import Product from './components/Product';
import Break from './components/Break';
import About from './components/About';
import Guest from './components/Guest';
import Facebook from './components/Facebook';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import { Element } from "react-scroll";
import './App.css';

function App() {
  return (
    <div className="App" id="application">
      <NavBar />
      <Carousel />
      <Break />
      <Element id="section1" className="element"><Product /></Element>
      <Break />
      <Element id="section2" className="element"><About /></Element>
      <Break />
      <Element id="section3" className="element"><Guest /></Element>
      <Break />
      <Element id="section4" className="element"><Facebook /></Element>
      <Break />
      <Element id="section5" className="element"><Instagram /></Element>
      <Break />
      <Element id="section6" className="element"><Contact /></Element>
      <Break />
      <Element id="section6" className="element"><Location /></Element>
      <Footer />
    </div>
  );
}

export default App;