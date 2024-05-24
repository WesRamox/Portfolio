import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {

     return(
          <header className="header">
               <NavLink to="/" className="nav__logo">
                    <p><span style={{color: "black"}}>Wesley </span>Ramos</p>
               </NavLink>
               
               <ul className="nav__list">
                    <li className="nav__item">
                         <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="nav__item">
                         <NavLink to="/">Sobre</NavLink>
                    </li>
                    <li className="nav__item">
                         <NavLink to="/">Experiencias</NavLink>
                    </li>
                    <li className="nav__item">
                         <NavLink to="/">Projetos</NavLink>
                    </li>
               </ul>

               <div className="nav__contact">          
                    <NavLink to="/contato">Contato</NavLink>
               </div> 
                    
          </header>
     )
}

export default Navbar;