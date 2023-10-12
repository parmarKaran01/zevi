import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Search from "./Search";
import { ProductContext } from "../context/ProductContext";
import { constants } from "../helper";
import Back from "../assets/back.svg"
import Zevi from "../assets/zevi.webp"
const Navbar = () => {
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const { query, setQuery} = useContext(ProductContext);

  useEffect(() => {
    if (window.location.pathname === "/products") {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  }, [window.location.pathname]);

  return (
    <div className="w-screen h-[7rem] flex items-center justify-start px-[2rem] relative">
      {showSearchBar ? (
        <>
          <button onClick={() => navigate("/")}>
            <img src={Back} className="w-6 h-6"/>
          </button>
          <div className="mx-auto hidden md:block">
          <Search query={query} setQuery={setQuery} navBarStyles={true} />
          </div>
        </>
      ) : null}
      <img src={Zevi} className="w-20 absolute right-12"/>
    </div>
  );
};

export default Navbar;
