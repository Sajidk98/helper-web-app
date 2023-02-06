import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function Routec() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Profile />} /> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
