import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
