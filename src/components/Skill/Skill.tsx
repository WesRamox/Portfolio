import { useEffect, useState } from 'react'
import { techsInform } from '../../data/MockTechs';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt, FaGithub  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { IconContext } from "react-icons";
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./Skill.css"

const Skill = () => {

   useEffect(() => {
      AOS.init({
         // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
         delay: 100, // values from 0 to 3000, with step 50ms
         duration: 300, // values from 0 to 3000, with step 50ms
       });
   }, [])

   let [techInfo, setTech] = useState(0)

   return(
      <div className="skills flex flex-col items-center justify-center gap-6">
         <div className="flex max-w-[1300px] items-center justify-center flex-wrap gap-16 mt-10 max-[700px]:gap-8 2xl:gap-24 skills" data-aos="fade-up" data-aos-delay="200">
            <IconContext.Provider value={{ className: "global-stacks" }}>
               <FaHtml5 className="text-[#F16529]" onClick={() => { setTech(0) }} />
               <FaCss3Alt className="text-[#1172B8]" onClick={() => { setTech(1) }} />
               <FaBootstrap className="text-[#552d91]" onClick={() => { setTech(2) }} />
               <FaGitAlt className="text-[#EE513B]" onClick={() => { setTech(3) }} />
               <FaGithub onClick={() => { setTech(4) }} />
               <FaReact className="text-[#53C1DE]" onClick={() => { setTech(5) }} />
               <IoLogoJavascript className="text-[#f7df1e]" onClick={() => { setTech(6) }} />
               <RiTailwindCssFill className="text-[#44a8c3]" onClick={() => { setTech(7) }}/>
               <SiTypescript className="text-[#3178c6]" onClick={() => { setTech(8) }}/>
            </IconContext.Provider>
         </div>
         <div className="flex mt-5 flex-col gap-2 justify-center items-center cursor-default max-w-[30rem]" data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-2xl dark:text-neutral-200 text-neutral-800 font-bold">{techsInform[techInfo].name}</h2>
            <p className=" max-[620px]:w-72 dark:text-gray-300 max-[320px]:text-xs">{techsInform[techInfo].description}</p>
            <p className=" text-blue-500 font-bold"><span className='dark:text-white text-gray-500'>Tempo de Experiencia:</span> {techsInform[techInfo].experience}</p>
         </div>
      </div>
   )
}

export default Skill