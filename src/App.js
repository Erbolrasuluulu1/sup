import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Hero from "./components/Hero";
import Zacaz from "./components/Zakaz";
import Chem from "./components/Chem";
import Start from "./components/Start";


function App() {
  return (
    <div id="App">
      <Header/>
        <Hero/>
        <Zacaz/>
        <Chem/>
        <Start/>
      <Footer/>
    </div>
  );
}

export default App;
