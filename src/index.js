import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>Navbar</h1>;
};

const container = document.getElementById("root");

createRoot(container).render(<App />);