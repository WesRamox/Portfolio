import { IconContext } from "react-icons"
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import AOS from 'aos';
import { Project } from "../Project/Project";
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import "./Works.css"

const Works = () => {

   useEffect(() => {
      AOS.init({
         // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
         delay: 100, // values from 0 to 3000, with step 50ms
         duration: 300, // values from 0 to 3000, with step 50ms
      });
   }, [])


   return (
      <>
         <Project className="project rounded max-w-[25rem] flex flex-col bg-zinc-200 dark:bg-black w-full" data-aos="fade-up" data-aos-delay="400" id="0">
            <div className="stacks flex gap-2">
               <IconContext.Provider value={{ className: 'stacks' }}>
                  <FaHtml5 className="text-[#F16529]" />
                  <FaCss3Alt className="text-[#1172B8]" />
                  <IoLogoJavascript title="Javascript" className="dark:text-[#FFFF00] text-black" />
               </IconContext.Provider>
            </div>
         </Project>

         <Project className="project rounded max-w-[25rem] flex flex-col bg-zinc-200 dark:bg-black w-full" data-aos="fade-up" data-aos-delay="600" id="1">
            <div className="stacks flex gap-2">
               <IconContext.Provider value={{ className: 'stacks' }}>
                  <FaHtml5 className="text-[#F16529]" />
                  <FaCss3Alt className="text-[#1172B8]" />
                  <RiTailwindCssFill title="Tailwind" color="#44a8c3" />
                  <IoLogoJavascript title="Javascript" className="dark:text-[#FFFF00] text-black" />
               </IconContext.Provider>
            </div>
         </Project>

         <Project className="project rounded max-w-[25rem] bg-zinc-200 dark:bg-black w-full" data-aos="fade-up" data-aos-delay="500" id="2">
            <div className="stacks flex gap-2">
               <IconContext.Provider value={{ className: 'stacks' }}>
                  <FaReact title="React" color="#53C1DE" />
                  <SiTypescript title="Typescript" color="#3178c6" />
                  <RiTailwindCssFill title="Tailwind" color="#44a8c3" />
               </IconContext.Provider>
            </div>
         </Project>
      </>
   )
}

export default Works