import DownloadCV from "../DownloadCV/DownloadCV"
import Links from "../Links/Links"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";
import "./Header.css"

const Header = () => {

   const [ isMobile, isMobileChanger ] = useState(false)

   const toggleMenu = () => {
      isMobileChanger(!isMobile);
    };

   return(
         <nav className="fixed z-50 w-full inset-x-0 max-[535px]:px-0 2xl:px-[18rem] max-[1200px]:w-full lg:px-[5rem] max-[854px]:px-0 min-w-screen top-0 h-20 bg-zinc-100 dark:bg-zinc-900 dark:bg-opacity-60 px-12 dark:backdrop-blur-md text-transparent backdrop-blur-md bg-opacity-30">
            <div className="flex justify-between items-center h-full max-[855px]:justify-center max-[850px]:w-screen relative">
               <div className="max-[1200px]:hidden">
                  <Links />
               </div>
               <div className="max-[855px]:hidden">
                  <ul className="nav-list flex gap-10 min-[850px]:text-lg dark:text-neutral-300 text-neutral-800 font-normal">
                     <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-700" href="#home">Início</a></li>
                     <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-700" href="#about">Sobre</a></li>
                     <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-700" href="#skills">Habilidades</a></li>
                     <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-700" href="#projects">Projetos</a></li>
                  </ul>
               </div>
               {isMobile && (
                  <div className="toggle simple-transition min-[855px]:hidden absolute dark:bg-zinc-950 bg-slate-100 bottom-9 w-full top-20">
                     <ul className="flex flex-col dark:bg-zinc-900 dark:bg-opacity-60 text-lg p-4 bg-blue-400 font-normal dark:text-white text-neutral-600 bg-opacity-90 gap-6">
                        <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-700" href="#home">Início</a></li>
                        <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-700" href="#about">Sobre</a></li>
                        <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-700" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-700" href="#projects">Projetos</a></li>
                        <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-700" href="#contact">Contato</a></li>
                     </ul>
                  </div>
               )}
               <div className="flex gap-6 max-[855px]:px-5 justify-center items-center">
                  <div className="max-[855px]:flex hidden">
                     <button onClick={toggleMenu} className="simple-transition bg-transparent border-none p-0">
                        <IconContext.Provider value={{ className: "dark:text-white simple-transition text-gray-400 hover:text-gray-500 dark:hover:text-gray-300", size: "25" }}>
                           {isMobile ? <IoMdClose className="dark:text-neutral-300 text-neutral-600" /> : <RxHamburgerMenu className="dark:text-neutral-300 text-neutral-600" />}
                        </IconContext.Provider>
                     </button>
                  </div>
                  <div className="flex gap-6">
                     <DownloadCV />
                     <ThemeSwitcher />
                  </div>
               
               </div>
               
            </div>
         </nav>
   )
}

export default Header