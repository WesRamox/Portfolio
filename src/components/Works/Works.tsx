import { IconContext } from "react-icons"
import { FaReact, FaEye, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { DiGithubFull } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import AOS from 'aos';
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

   let projects = [
      {
         id: 1,
         name: "Dev Academy",
         description: "Desbloqueie seu potencial e torne-se um desenvolvedor de software de alta demanda com a Dev Academy!",
         image_url: "https://camo.githubusercontent.com/6453a7d1a3098db562b6d6b4fdf68dd3e5a31f8aedd1e38610547b94dabc13f0/68747470733a2f2f736e6970626f6172642e696f2f47626f6479372e6a7067",
         github: "https://github.com/WesRamox/devAcademy",
         deploy: "https://dev-academy-delta.vercel.app/"
      },
      {
         id: 2,
         name: "Market Controller",
         description: "O Market Controller é uma solução robusta e prática para qualquer estabelecimento que lida com uma grande variedade de produtos perecíveis.",
         image_url: "https://camo.githubusercontent.com/a39ff55b0d63aafdadb1147713577862831bf63cfe6eccf1fd01505fd3c0f1af/68747470733a2f2f736e6970626f6172642e696f2f313975445a362e6a7067",
         github: "https://github.com/WesRamox/MarketController",
         deploy: ""
      },
      {
         id: 3,
         name: "Meu portfolio",
         description: "Aqui, você encontrará uma coleção dos meus projetos desenvolvidos ao longo da minha trajetória como desenvolvedor.",
         image_url: "https://snipboard.io/8nTNau.jpg",
         github: "https://github.com/WesRamox/Portfolio",
         deploy: "https://wesleyramos.vercel.app/"
      }
   ]

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