import { useContext, useState } from "react";
import Search from "./Search";
import SuggestionBox from "./SuggestionBox";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const { query, setQuery } = useContext(ProductContext);
  return (
    <div className="flex mt-[5rem] flex-col items-center justify-center gap-[1rem]">
      <Search
        setShowSuggestion={setShowSuggestion}
        showSuggestion={showSuggestion}
        query={query}
        setQuery={setQuery}
      />
      {showSuggestion ? (
        <SuggestionBox setShowSuggestion={setShowSuggestion} />
      ) : null}
    </div>
  );
};

export default Home;
