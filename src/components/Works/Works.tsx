import { IconContext } from "react-icons"
import { FaReact, FaEye, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { DiGithubFull } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import "./Works.css"
 
const Works = () => {

   let projects = [
      {
         id: 0,
         name: "Temperatura Hoje",
         description: "Este projeto permite aos usuários verificar a temperatura atual em qualquer local. O objetivo principal é proporcionar uma ferramenta simples para acessar informações meteorológicas.",
         image_url: "https://camo.githubusercontent.com/f88ad70b484fe8bd859940827e3ceb24037017f8d04cefe4accd7ce7443212c0/68747470733a2f2f736e6970626f6172642e696f2f4b4e7646344c2e6a7067",
         github: "",
         deploy: ""
      },
      {
         id: 1,
         name: "Market Controller",
         description: "O Market Controller é uma solução robusta e prática para qualquer estabelecimento que lida com uma grande variedade de produtos perecíveis.",
         image_url: "https://camo.githubusercontent.com/a39ff55b0d63aafdadb1147713577862831bf63cfe6eccf1fd01505fd3c0f1af/68747470733a2f2f736e6970626f6172642e696f2f313975445a362e6a7067",
         github: "",
         deploy: ""
      },
      {
         id: 2,
         name: "Portfolio",
         description: "",
         image_url: "https://camo.githubusercontent.com/a39ff55b0d63aafdadb1147713577862831bf63cfe6eccf1fd01505fd3c0f1af/68747470733a2f2f736e6970626f6172642e696f2f313975445a362e6a7067",
         github: "",
         deploy: ".."
      }
   ]

   return(
      <>
      <div className="project-01 rounded max-w-[25rem] flex flex-col bg-zinc-300 dark:bg-black w-full">
         <img src={projects[0].image_url} className="img-project-01 max-h-[250px]" />
         <div className="details p-3 min-h-[181px] dark:bg-neutral-800 flex flex-col items-start">
            <p className="text-xl dark:text-white ">{projects[0].name}</p>
            <p className="text-sm text-start py-2 dark:text-zinc-300 text-zinc-800">{projects[0].description}</p>
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
                     <a href="" target="__blank" title="Visitar" className="hover:text-zinc-400"><FaEye /></a>
                     <a href="" target="__blank" title="Repositório" className="hover:text-zinc-400"><DiGithubFull /></a>
                  </IconContext.Provider>
               </div>
            </div>
         </div>
      </div>
      <div className="project-02 rounded max-w-[25rem] flex flex-col bg-zinc-300 dark:bg-black w-full">
         <img src={projects[1].image_url} className="img-project-02 max-h-[250px]" />
         <div className="details p-3 min-h-[181px] dark:bg-neutral-800 flex flex-col items-start">
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
                     <a href="" target="__blank" title="Visitar" className="hover:text-zinc-400"><FaEye /></a>
                     <a href="" target="__blank" title="Repositório" className="hover:text-zinc-400"><DiGithubFull /></a>
                  </IconContext.Provider>
               </div>
            </div>
         </div>
      </div>
      <div className="project-03 rounded max-w-[25rem] bg-zinc-300 dark:bg-black w-full">
         <img src={projects[2].image_url} className="img-project-02 max-h-[250px]" />
         <div className="details p-3 min-h-[181px] dark:bg-neutral-800 flex flex-col items-start justify-between">
            <p className="text-xl dark:text-white ">{projects[2].name}</p>
            <p className="text-sm text-start py-2 dark:text-zinc-300 text-zinc-800">{projects[2].description}</p>
            <div className="stack-links flex justify-between w-full pt-2">
               <div className="stacks flex gap-2">
                  <IconContext.Provider value={{ className: 'stacks' }}>
                     <FaCss3Alt className="text-[#1172B8]" />
                     <RiTailwindCssFill title="Tailwind" color="#44a8c3" />
                     <FaReact title="React" color="#53C1DE" />
                     <SiTypescript title="Typescript" color="#3178c6" />
                  </IconContext.Provider>
               </div>
               <div className="links  flex gap-2">
                  <IconContext.Provider value={{ className: 'stacks' }}>
                     <a href="" target="__blank" title="Visitar" className="hover:text-zinc-400"><FaEye /></a>
                     
                     <a href="" target="__blank" title="Repositório" className="hover:text-zinc-400"><DiGithubFull /></a>
                  </IconContext.Provider>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}

export default Works