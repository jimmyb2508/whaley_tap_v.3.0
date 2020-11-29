import NavBar from './components/Navbar';
import Carousel from './components/Carousel';
import Product from './components/Product';
import Break from './components/Break';
import About from './components/About';
import Guest from './components/Guest';
import Facebook from './components/Facebook';
// import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App" id="application">
      <NavBar />
      <Carousel />
      <Break />
      <Product />
      <Break />
      <About />
      <Break />
      <Guest />
      <Break />
      <Facebook />
      <Break />
      {/* <Instagram /> */}
      <Break />
      <Contact />
      <Break />
      <Location />
      <Footer />
    </div>
  );
}

export default App;