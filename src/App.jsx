import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import "./app.css";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
      <Footer />
    </div>
  );
}

export default App;
