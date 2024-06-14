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
      <div className="skills flex flex-col items-center justify-center gap-6">
         <div className="flex max-w-[1300px] items-center justify-center flex-wrap gap-16 mt-10 max-[700px]:gap-8 2xl:gap-24 skills" data-aos="fade-up" data-aos-delay="200">
            <IconContext.Provider value={{ className: "global-stacks" }}>
               <FaHtml5 className="text-[#F16529]"/>
               <FaCss3Alt className="text-[#1172B8]" />
               <FaBootstrap className="text-[#552d91]" />
               <FaGitAlt className="text-[#EE513B]" />
               <FaGithub />
               <FaReact className="text-[#53C1DE]" />
               <IoLogoJavascript className="text-[#f7df1e]" />
               <RiTailwindCssFill className="text-[#44a8c3]" />
               <SiTypescript className="text-[#3178c6]" />
            </IconContext.Provider>
         </div>
         <div className="flex flex-col gap-2 justify-center items-center">
            <h2 className="text-2xl text-blue-500">Tech name</h2>
            <p className="w-96 max-[455px]:w-64">Tech description, in here, is a tech for a tech in the new york. Tech description, in here, is a tech for a tech in the new york</p>
            <p className="w-96 text-blue-500 ">Years of Experience: 2 years</p>
         </div>
      </div>
   )
}

export default Skill