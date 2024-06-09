import DownloadCV from "../DownloadCV/DownloadCV"
import Links from "../Links/Links"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

const Header = () => {

   return(
         <nav className="navbar fixed w-full inset-x-0 xl:px-[18rem] lg:px-[5rem] min-w-[30rem] top-0 h-20 bg-zinc-200 dark:bg-zinc-900 dark:bg-opacity-60 px-64 dark:backdrop-blur-md text-white backdrop-blur-md bg-opacity-50">
            <div className="flex justify-between items-center h-full">
            <Links />
            <ul className="nav-list flex gap-10 text-lg font-normal dark:text-neutral-300 text-neutral-600 ">
               <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="#home">Início</a></li>
               <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="#about">Sobre</a></li>
               <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="">Habilidades</a></li>
               <li className="nav-item"><a className="dark:hover:text-neutral-500 hover:text-neutral-950" href="#projects">Projetos</a></li>
            </ul>
            <div className="flex gap-4 justify-center items-center">
               <DownloadCV />
               <ThemeSwitcher />
            </div>
            </div>
         </nav>
   )
}

export default Header