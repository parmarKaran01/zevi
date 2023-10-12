import React from "react";
import SearchIcon from "../assets/search.svg"

type SearchProps = {
  showSuggestion?: Boolean;
  setShowSuggestion?: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  navBarStyles?: boolean;
};
const Search = ({
  query,
  setQuery,
  setShowSuggestion = () => {},
  navBarStyles,
}: SearchProps) => {
  //   const [query, setQuery] = useState<string>("");
  const toggle = () => {
    setShowSuggestion(true);
  };

  

  return (
    <div
      className={`md:w-[600px] w-[90%] py-3 px-4 bg-slate-100 shadow-md rounded-[15px] flex items-center  ${
        navBarStyles
          ? "bg-white text-black border-slate-400 border-[1px] rounded-[15px] shadow-none px-6"
          : ""
      }`}
    >
      <input
        className="w-full bg-transparent focus:outline-none"
        value={query}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(event.target.value);
        }}
        onFocus={toggle}
        // onBlur={toggle}
        placeholder="Search"
      />
      <img src={SearchIcon} className="cursor-pointer" />
    </div>
  );
};

export default Search;
