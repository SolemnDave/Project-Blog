import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProjectBlog from "./Components/ProjectBlog";
import BookOne from "./Components/BookOne";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-blog" element={<ProjectBlog />} />
        <Route path="/book-one" element={<BookOne />} />
      </Routes>
    </Router>
  );
}

export default App;
