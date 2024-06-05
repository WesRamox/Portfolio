import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { IconContext } from "react-icons"
import './Links.css'

const Links = () => {

   return(
      <IconContext.Provider value={{ className: "shared-class", size: '22' }}>
         <ul className="contact-list flex gap-7">
            <li className="item-contact"><a href=""><FaGithub /></a></li>
            <li className="item-contact"><a href=""><FaLinkedin /></a></li>
            <li className="item-contact"><a href=""><FaYoutube /></a></li>
         </ul>
      </IconContext.Provider>
   )
}

export default Links