import "./App.css";

import React from "react";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
