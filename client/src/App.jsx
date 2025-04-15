import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import TrendDetail from "./pages/TrendDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trend/:keyword" element={<TrendDetail />} />
      </Routes>
    </>
  );
}

export default App;
