import { Routes, Route } from "react-router-dom";

import Login from "../src/pages/auth/Login";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}