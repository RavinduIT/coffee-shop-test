import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import Customer from "./components/Customer.jsx";
import "./app.css";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Products />
        <Customer />
        <Footer />
    </div>
  );
}

export default App;
