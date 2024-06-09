import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt, FaGithub  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { IconContext } from "react-icons";
import "./Skill.css"

const Skill = () => {

   return(
      <div className="skills">
         <div className="flex items-center justify-center flex-wrap gap-10 mt-10 2xl:gap-32 skills">
            <IconContext.Provider value={{ className: "global-stacks dark:text-neutral-300 text-neutral-600" }}>
               <FaHtml5 color="#F16529" />
               <FaCss3Alt color="#1172B8" />
               <FaReact color="#53C1DE" />
               <FaBootstrap color="#552d91" />
               <FaGitAlt color="#EE513B" />
               <FaGithub className="dark:text-white" />
               <RiTailwindCssFill color="#44a8c3" />
               <IoLogoJavascript color="#f7df1e" />
               <SiTypescript color="#3178c6" />
            </IconContext.Provider>
         </div>
      </div>
   )
}

export default Skill