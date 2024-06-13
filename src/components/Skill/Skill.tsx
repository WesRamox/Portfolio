import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt, FaGithub  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { IconContext } from "react-icons";
import "./Skill.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Skill = () => {

   useEffect(() => {
      AOS.init({
         // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
         delay: 100, // values from 0 to 3000, with step 50ms
         duration: 300, // values from 0 to 3000, with step 50ms
       });
    }, [])

   return(
      <div className="skills flex items-center justify-center">
         <div className="flex max-w-[1300px] items-center justify-center flex-wrap gap-16 mt-10 max-[700px]:gap-8 2xl:gap-24 skills" data-aos="fade-up" data-aos-delay="200">
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