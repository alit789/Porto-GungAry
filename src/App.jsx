import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import Components
import Navbar from "./Components/Navbar/Navbar";
// import Section
import Hero from "./Section/Hero/Hero";
import Project from "./Section/Project/Project";
import Footer from "./Section/Footer/Footer"

function App() {
  return (
    <div style={{height:'200vh'}}>
      <Navbar />
      <Hero/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
