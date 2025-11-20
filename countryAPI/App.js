import Header from "./components/Header"
import './App.css'
import { useState } from "react"

import { Outlet } from "react-router-dom"
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext"
const App =()=>{

  //  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
return(
  
  // <ThemeContext.Provider value={[isDark, setIsDark]}>
<ThemeProvider>
  {/* <Header theme={[isDark, setIsDark]} />
    <Outlet context={[isDark, setIsDark]}/> */}
     <Header  />
    <Outlet /> 
  </ThemeProvider>
  // </ThemeContext.Provider>
)
}

export default App