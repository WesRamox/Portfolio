import { IconContext } from "react-icons"
import { FaReact } from "react-icons/fa"
import { FaEye } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri"
import { DiGithubFull } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import "./Works.css"
import market from "../../assets/marketcontroller.png"
 
const Works = () => {

   const projects = [
      {
         id: 0,
         name: "Market Controller",
         description: "O Market Controller é uma solução robusta e prática para qualquer estabelecimento que lida com uma grande variedade de produtos perecíveis.",
         image_url: ""
      }
   ]

   return(
      <>
      <div className="project-01 rounded max-w-[25rem] bg-zinc-300 dark:bg-black w-full">
         <img src={market} className="img-project-01" />
         <div className="details p-3 dark:bg-neutral-800 flex flex-col items-start">
            <p className="text-xl dark:text-white ">{projects[0].name}</p>
            <p className="text-sm text-start py-2 dark:text-zinc-300 text-zinc-800">{projects[0].description}</p>
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