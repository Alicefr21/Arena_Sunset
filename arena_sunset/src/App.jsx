import "./App.css";
import Cadastro from "./components/Cadastro";
import Diferenciais from "./components/Diferenciais";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Modalidades from "./components/modalidades";


function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Hero />
      <Modalidades/>
      <Diferenciais/>
      <Cadastro/>
      <Footer/>

      </div>
    </>
  );
}

export default App;