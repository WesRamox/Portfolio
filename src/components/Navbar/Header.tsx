import DownloadCV from "../DownloadCV/DownloadCV"
import Links from "../Links/Links"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {

   return(
         <nav className="navbar fixed z-50 w-full inset-x-0 max-[535px]:px-0 2xl:px-[18rem] max-[1200px]:w-full lg:px-[5rem] max-[854px]:px-0 min-w-screen top-0 h-20 bg-zinc-200 dark:bg-zinc-900 dark:bg-opacity-60 px-12 dark:backdrop-blur-md text-white backdrop-blur-md bg-opacity-50">
            <div className="flex justify-between items-center h-full max-[855px]:justify-center max-[850px]:w-screen">
               <div className="max-[1200px]:hidden">
                  <Links />
               </div>
               <div className="max-[855px]:hidden">
                  <ul className="nav-list flex gap-10 min-[850px]:text-lg font-normal dark:text-neutral-300 text-neutral-600">
                     <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="#home">Início</a></li>
                     <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="#about">Sobre</a></li>
                     <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="#skills">Habilidades</a></li>
                     <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="#projects">Projetos</a></li>
                     <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="#contact">Contato</a></li>
                  </ul>
               </div>
               <div className="flex gap-6 max-[855px]:px-5 justify-center items-center">
                  <div className="max-[855px]:flex hidden">
                  <RxHamburgerMenu size={35}/>
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