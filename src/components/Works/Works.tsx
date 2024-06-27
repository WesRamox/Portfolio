import { IconContext } from "react-icons"
import { FaReact, FaEye, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { DiGithubFull } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { projects } from "../../data/MockProjects";
import "./Works.css"

const Works = () => {

   useEffect(() => {
      AOS.init({
         // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
         delay: 100, // values from 0 to 3000, with step 50ms
         duration: 300, // values from 0 to 3000, with step 50ms
       });
    }, [])
   

   return(
      <>
      <div className="project rounded max-w-[25rem] flex flex-col bg-zinc-200 dark:bg-black w-full" data-aos="fade-up" data-aos-delay="400">
         <img src={projects[0].image_url} className="img-project-01 h-[250px]" />
         <div className="details p-3 min-h-[181px] dark:bg-neutral-800 justify-around flex flex-col items-start">
         <div className="flex flex-col text-start">
            <p className="text-xl dark:text-white ">{projects[0].name}</p>
            <p className="text-sm text-start py-2 dark:text-zinc-300 text-zinc-800">{projects[0].description}</p>
         </div>
            <div className="stack-links flex justify-between w-full pt-2">
               <div className="stacks flex gap-2">
                  <IconContext.Provider value={{ className: 'stacks' }}>
                     <FaHtml5 className="text-[#F16529]"/>
                     <FaCss3Alt className="text-[#1172B8]" />
                     <IoLogoJavascript title="Javascript" className="dark:text-[#FFFF00] text-black" />
                  </IconContext.Provider>
               </div>
               <div className="links  flex gap-2">
                  <IconContext.Provider value={{ className: 'stacks' }}>
                     <a href={projects[0].deploy} target="__blank" title="Visitar" className="hover:text-zinc-400"><FaEye /></a>
                     <a href={projects[0].github} target="__blank" title="Repositório" className="hover:text-zinc-400"><DiGithubFull /></a>
                  </IconContext.Provider>
               </div>
            </div>
         </div>
      </div>

      
      <div className="project rounded max-w-[25rem] flex flex-col bg-zinc-200 dark:bg-black w-full" data-aos="fade-up" data-aos-delay="600">
         <img src={projects[1].image_url} className="img-project-02 h-[250px]" />
         <div className="details p-3 min-h-[181px] dark:bg-neutral-800 flex flex-col justify-between items-start">
            <div className="flex flex-col text-start">
               <p className="text-xl dark:text-white ">{projects[1].name}</p>
               <p className="text-sm text-start py-2 dark:text-zinc-300 text-zinc-800">{projects[1].description}</p>
            </div>
            <div className="stack-links flex justify-between w-full pt-2">
               <div className="stacks flex gap-2">
                  <IconContext.Provider value={{ className: 'stacks' }}>
                     <FaHtml5 className="text-[#F16529]"/>
                     <FaCss3Alt className="text-[#1172B8]" />
                     <RiTailwindCssFill title="Tailwind" color="#44a8c3"/>
                     <IoLogoJavascript title="Javascript" className="dark:text-[#FFFF00] text-black" />
                  </IconContext.Provider>
               </div>
               <div className="links  flex gap-2">
                  <IconContext.Provider value={{ className: 'stacks' }}>
                     <a href={projects[1].deploy} target="__blank" title="Visitar" className="hover:text-zinc-400"><FaEye /></a>
                     <a href={projects[1].github} target="__blank" title="Repositório" className="hover:text-zinc-400"><DiGithubFull /></a>
                  </IconContext.Provider>
               </div>
            </div>
         </div>
      </div>


      <div className="project rounded max-w-[25rem] bg-zinc-200 dark:bg-black w-full" data-aos="fade-up" data-aos-delay="500">
         <img src={projects[2].image_url} className="img-project-02 h-[250px]" />
         <div className="details p-3 min-h-[181px] dark:bg-neutral-800 flex flex-col items-start justify-between">
            <div className="flex flex-col text-start">
               <p className="text-xl dark:text-white ">{projects[2].name}</p>
               <p className="text-sm text-start py-2 dark:text-zinc-300 text-zinc-800">{projects[2].description}</p>
            </div>
            <div className="stack-links flex justify-between w-full pt-2">
               <div className="stacks flex gap-2">
                  <IconContext.Provider value={{ className: 'stacks' }}>
                     <FaReact title="React" color="#53C1DE" />
                     <SiTypescript title="Typescript" color="#3178c6" />
                     <RiTailwindCssFill title="Tailwind" color="#44a8c3" />
                  </IconContext.Provider>
               </div>
               <div className="links  flex gap-2">
                  <IconContext.Provider value={{ className: 'stacks' }}>
                     <a href={projects[2].deploy} target="__blank" title="Visitar" className="hover:text-zinc-400"><FaEye /></a>
                     <a href={projects[2].github} target="__blank" title="Repositório" className="hover:text-zinc-400"><DiGithubFull /></a>
                  </IconContext.Provider>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}

export default Works