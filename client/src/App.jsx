import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
