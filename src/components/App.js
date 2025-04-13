import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

function App() {
  const projects=[];
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
