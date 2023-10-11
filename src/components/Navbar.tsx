import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Search from "./Search";
import { ProductContext } from "../context/ProductContext";
const Navbar = () => {
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const { query, setQuery } = useContext(ProductContext);

  useEffect(() => {
    if (window.location.pathname === "/products") {
      setShowSearchBar(true);
    }else {
        setShowSearchBar(false)
    }
  }, [window.location.pathname]);

  return (
    <div className="w-screen h-[7rem] flex items-center justify-between px-[2rem]">
      {showSearchBar ? (
        <>
          <button onClick={() => navigate("/")}>back</button>
          <Search query={query} setQuery={setQuery} navBarStyles={true}/>
        </>
      ) : null}
      <button onClick={() => navigate("/products")}>products</button>
    </div>
  );
};

export default Navbar;
