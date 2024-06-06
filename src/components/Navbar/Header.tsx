import Links from "../Links/Links"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
import "./Header.css"

const Header = () => {

   return(
         <nav className="navbar fixed w-full inset-x-0 top-0 h-20 bg-slate-50 dark:bg-zinc-900 dark:bg-opacity-60 px-64 dark:backdrop-blur-md text-white backdrop-blur-md bg-opacity-50">
            <div className="flex justify-between items-center h-full">
            <Links />
            <ul className="nav-list flex gap-10 text-sm font-normal dark:text-neutral-300 text-neutral-600 ">
               <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="#home">Início</a></li>
               <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="#about">Sobre</a></li>
               <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="">Habilidades</a></li>
               <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="">Projetos</a></li>
            </ul>
            <div className="flex gap-4 justify-center items-center">
               <button className="nav-item download-cv">Download CV</button>
               <ThemeSwitcher />
            </div>
            </div>
         </nav>
   )
}

export default Header