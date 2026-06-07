import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container mt-4">
        <h1>OctoFit Tracker</h1>
        <p className="lead">
          Frontend scaffolded with React 19 + Vite (dev port 5173)
        </p>
      </div>
    </BrowserRouter>
  );
}
