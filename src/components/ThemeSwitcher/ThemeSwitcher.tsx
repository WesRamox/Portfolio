import { PiSunDuotone } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";
import { IconContext } from "react-icons"
import { useState, useEffect } from "react";
import "./ThemeSwitcher.css"

const ThemeSwitcher = () => {

   const selectedTheme = localStorage.getItem('theme_')
   const [theme, setTheme] = useState(selectedTheme);
   
   useEffect(() => {
      if(theme === "dark") {
         window.document.documentElement.classList.add("dark")
         localStorage.setItem('theme_', "dark")
      } else {
         window.document.documentElement.classList.remove("dark")
         localStorage.setItem('theme_', "light")
      }
   }, [theme])

   const handleThemeSwitch = () => {
      setTheme(
         theme === "dark" ? "light" : "dark"
      )
   }

   return (
      <button onClick={handleThemeSwitch} className="bg-transparent switch-theme p-0 border-none">
         <IconContext.Provider value={{ className: "dark:text-white switch-theme text-gray-400 hover:text-gray-500 dark:hover:text-gray-300", size: "25" }}>
            {theme === 'dark' ? <PiSunDuotone /> : <FaMoon />}
         </IconContext.Provider>
      </button>
   )
}

export default ThemeSwitcher