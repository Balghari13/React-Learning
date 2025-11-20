// import React, { useContext, useEffect } from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";

import CountryList from "./components/CountryList";
// import { useOutletContext } from "react-router-dom";
// import { ThemeContext } from "./contexts/ThemeContext";
import { useWindowSize } from "./useWindowSize";
import { useTheme } from "./hooks/useTheme";

export default function Home() {
  const [query, setQuery] = useState("");
  //  const [isDark] = useOutletContext()
  //  const [isDark] = useContext(ThemeContext)
   const [isDark] = useTheme()
  //  const a = useContext(ThemeContext)
  //  console.log(a);
  const windowSize = useWindowSize();

  return (
   <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
      {/* {windowSize.width}x{windowSize.height} */}
      <CountryList query={query} />
    </main>
  );
}
