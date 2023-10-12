import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen overflow-hidden bg-[url('/src/assets/background.jpg')] object-contain">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
