import React, { useContext } from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";

import CountryList from "./components/CountryList";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";

export default function Home() {
  const [query, setQuery] = useState("");
  //  const [isDark] = useOutletContext()
   const [isDark] = useContext(ThemeContext)
  //  const a = useContext(ThemeContext)
  //  console.log(a);
   
  return (
   <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === 'unmount' ? '' : <CountryList query={query} />}
    </main>
  );
}
