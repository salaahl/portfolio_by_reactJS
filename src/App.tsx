import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './assets/styles/App.css';

function App() {

  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
};

export default App;
