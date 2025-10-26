import Header from "./components/Header"
import './App.css'
import SearchBar from "./components/SearchBar"
import SelectMenu from "./components/SelectMenu"

import CountryList from "./components/CountryList"
import { useState } from "react";
const App =()=>{
  const [query, setQuery] = useState('')
return(
  <>
  <Header/>
  <main>
<div className="search-filter-container">
<SearchBar setQuery={setQuery}/>
  <SelectMenu/>
</div>
  </main>
  <CountryList query={query}/>
  </>
)
}

export default App