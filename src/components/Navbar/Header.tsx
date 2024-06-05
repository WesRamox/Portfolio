import Links from "../Links/Links"
import "./Header.css"

const Header = () => {

   return(
         <nav className="navbar fixed inset-x-0 top-0 h-20 bg-zinc-900 px-56 bg-opacity-50">
            <div className="flex justify-between items-center h-full">
            <Links />
            <ul className="nav-list flex gap-10 text-sm font-normal">
               <li className="nav-item"><a href="">Início</a></li>
               <li className="nav-item"><a href="">Sobre</a></li>
               <li className="nav-item"><a href="">Projetos</a></li>
            </ul>
            <button className="nav-item download-cv">Download CV</button>
            </div>
         </nav>
   )
}

export default Header