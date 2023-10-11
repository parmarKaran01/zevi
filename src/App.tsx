import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import SuggestionBox from "./components/SuggestionBox";
import Products from "./pages/Products";
import ProductContextProvider, {
  ProductContext,
} from "./context/ProductContext";

function App() {
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const { query, setQuery } = useContext(ProductContext);
  return (
    <BrowserRouter>
      <div className="w-screen h-screen overflow-x-hidden">
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
                    query={query}
                    setQuery={setQuery}
                  />
                  {showSuggestion ? <SuggestionBox /> : null}
                </div>
              </>
            }
          />

          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
