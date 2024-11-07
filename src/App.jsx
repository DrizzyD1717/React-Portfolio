import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="body">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
