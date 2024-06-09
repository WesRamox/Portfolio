import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt, FaGithub  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { IconContext } from "react-icons";
import "./Skill.css"

const Skill = () => {

   return(
      <div className="skills">
         <div className="flex items-center justify-center gap-36 mt-10 skills">
            <IconContext.Provider value={{ className: "dark:text-neutral-300 text-neutral-600", size: '60' }}>
               <FaHtml5 />
               <FaCss3Alt />
               <FaReact />
               <FaBootstrap />
               <FaGitAlt />
               <FaGithub />
               <RiTailwindCssFill />
               <IoLogoJavascript />
               <SiTypescript />
            </IconContext.Provider>
         </div>
      </div>
   )
}

export default Skill