import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { IconContext } from "react-icons"
import './Links.css'

const Links = () => {

   return(
      <IconContext.Provider value={{ className: "shared-class dark:hover:text-neutral-400 hover:text-neutral-950 dark:text-white text-neutral-700", size: '28' }}>
         <ul className="contact-list flex gap-7">
            <li className="item-contact"><a href="https://github.com/WesRamox" target='__blank'><FaGithub /></a></li>
            <li className="item-contact"><a href="https://www.linkedin.com/in/wesleyramox/"><FaLinkedin /></a></li>
            <li className="item-contact"><a href="https://www.youtube.com/@wesleyramox"><FaYoutube /></a></li>
         </ul>
      </IconContext.Provider>
   )
}

export default Links