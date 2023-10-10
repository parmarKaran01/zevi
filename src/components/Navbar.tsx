import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./Search";
const Navbar = () => {
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  useEffect(() => {
    if (window.location.pathname === "/products") {
      setShowSearchBar(true);
    }else {
        setShowSearchBar(false)
    }
  }, [window.location.pathname]);

  return (
    <div className="w-screen bg-slate-500 h-[4rem] flex items-center justify-between px-[2rem]">
      {showSearchBar ? (
        <>
          <button onClick={() => navigate("/")}>back</button>
          <Search />
        </>
      ) : null}
      Navbar
      <button onClick={() => navigate("/products")}>products</button>
    </div>
  );
};

export default Navbar;
