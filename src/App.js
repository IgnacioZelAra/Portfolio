import About from "./components/AboutMe/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar.js";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
