import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt, FaGithub  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { IconContext } from "react-icons";
import "./Skill.css"

const Skill = () => {

   return(
      <div className="skills flex items-center justify-center">
         <div className="flex max-w-[1300px] items-center justify-center flex-wrap gap-16 mt-10 2xl:gap-24 skills">
            <IconContext.Provider value={{ className: "global-stacks" }}>
               <FaHtml5 className="text-[#F16529]"/>
               <FaCss3Alt className="text-[#1172B8]" />
               <FaBootstrap className="text-[#552d91]" />
               <FaGitAlt className="text-[#EE513B]" />
               <FaGithub className="dark:text-white" />
               <FaReact className="text-[#53C1DE]" />
               <IoLogoJavascript className="text-[#f7df1e]" />
               <RiTailwindCssFill className="text-[#44a8c3]" />
               <SiTypescript className="text-[#3178c6]" />
            </IconContext.Provider>
         </div>
      </div>
   )
}

export default Skill