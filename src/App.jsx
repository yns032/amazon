import Header from "./components/header/Header"
import './App.css'
import Hero from "./components/hero/Hero"
import Slider from "./components/slider/Slider"
import Virtual from "./components/virtual/Virtual"
import Products from "./components/products/Products"
import Testi from "./components/testi/Testi"
import Footer from "./components/footer/Footer"
function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testi />
      <Footer />
    </div>
  )
}

export default App
