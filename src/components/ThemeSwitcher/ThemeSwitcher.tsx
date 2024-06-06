import { PiSunDuotone } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";
import { IconContext } from "react-icons"
import { useState, useEffect } from "react";
import "./ThemeSwitcher.css"

const ThemeSwitcher = () => {

   const [theme, setTheme] = useState("dark");

   useEffect(() => {
      if(theme === "dark") {
         window.document.documentElement.classList.add("dark")
         return 
         } else {
         window.document.documentElement.classList.remove("dark")
      }
   }, [theme])

   const handleThemeSwitch = () => {
      setTheme(
         theme === "dark" ? "light" : "dark"
      )
   }

   return (
      <button onClick={handleThemeSwitch} className="bg-transparent switch-theme p-0 border-none">
         <IconContext.Provider value={{ className: "dark:text-white switch-theme text-gray-400", size: "25" }}>
            {theme === 'dark' ? <PiSunDuotone /> : <FaMoon />}
         </IconContext.Provider>
      </button>
   )
}

export default ThemeSwitcher