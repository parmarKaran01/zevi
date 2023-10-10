import React, { useState } from "react";
import { constants } from "../helper";

type SearchProps ={
    showSuggestion? : Boolean
    setShowSuggestion? : React.Dispatch<React.SetStateAction<boolean>>
}
const Search = ({ showSuggestion ,setShowSuggestion = () => {}} : SearchProps) => {
  const [query, setQuery] = useState<string>("");
    const toggle = () => {
        console.log("focus")
        setShowSuggestion(!showSuggestion)
    }
  console.log("quer", query);
  return (
    <div className="w-3/6 py-3 px-4 bg-slate-300 rounded-md shadow-md flex items-center" >
      <input
      className="w-full bg-transparent focus:outline-none"
        value={query}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(event.target.value);
        }}
        onFocus={toggle}
        onBlur={toggle}
        placeholder="Search"
      />
      <img src={constants.img.search} className="cursor-pointer"/>
    </div>
  );
};

export default Search;
