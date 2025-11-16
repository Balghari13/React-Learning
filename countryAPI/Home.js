import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";

import CountryList from "./components/CountryList";
import { useState } from "react";
export default function Home() {
  const [query, setQuery] = useState("");
  return (
   <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === 'unmount' ? '' : <CountryList query={query} />}
    </main>
  );
}
