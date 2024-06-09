import { IconContext } from "react-icons"
import { FaCode, FaReact } from "react-icons/fa"
import { MdOutlineVisibility } from "react-icons/md"
import { RiTailwindCssFill } from "react-icons/ri"
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
      <div className="project-01  rounded max-w-[25rem] bg-zinc-300 dark:bg-black w-full">
         <img src={market} className="img-project-01" />
         <div className="details p-3 dark:bg-neutral-800 flex flex-col items-start">
            <p className="text-xl dark:text-white ">{projects[0].name}</p>
            <p className="text-sm text-start py-2 dark:text-zinc-300 text-zinc-800">{projects[0].description}</p>
            <div className="stack-links flex justify-between w-full pt-2">
               <div className="stacks flex gap-2">
                  <IconContext.Provider value={{ className: 'stacks' }}>
                     <SiTypescript color="" />
                     <RiTailwindCssFill color="" />
                     <FaReact color="" />
                  </IconContext.Provider>
               </div>
               <div className="links  flex gap-2">
                  <IconContext.Provider value={{ className: 'stacks' }}>
                     <a href="" target="__blank" title="Visitar"><MdOutlineVisibility /></a>
                     <a href="" target="__blank" title="Repositório"><FaCode /></a>
                  </IconContext.Provider>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}

export default Works