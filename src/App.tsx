import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SuggestionBox from "./components/SuggestionBox";
import Products from "./pages/Products";

function App() {
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <div className="w-screen h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="flex mt-[5rem] flex-col items-center justify-center gap-[1rem]">
                  <Search
                    setShowSuggestion={setShowSuggestion}
                    showSuggestion={showSuggestion}
                  />
                  {showSuggestion ? <SuggestionBox /> : null}
                </div>
              </>
            }
          />

          <Route path="/products" element={<Products />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
