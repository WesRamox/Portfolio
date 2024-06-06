import { MdOutlineVisibility } from "react-icons/md";
import { FaCode, FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RiTailwindCssFill } from "react-icons/ri";
import './Project.css'

const Project = () => {
   const projectsList = [
      {
         name: "Market Controller",
         description: "Sistema de gerenciamento de validade para Mercados",
         stacks: ["react", "tailwind"],
         imageUrl: "https://camo.githubusercontent.com/a39ff55b0d63aafdadb1147713577862831bf63cfe6eccf1fd01505fd3c0f1af/68747470733a2f2f736e6970626f6172642e696f2f313975445a362e6a7067",
         viewUrl: "https://google.com",
         codeUrl: "https://google.com"
      },
      {
         name: "NoteQuest",
         description: "Sistema de gerenciamento de validade para Mercados",
         stacks: ["react", "tailwind"],
         imageUrl: "https://camo.githubusercontent.com/a39ff55b0d63aafdadb1147713577862831bf63cfe6eccf1fd01505fd3c0f1af/68747470733a2f2f736e6970626f6172642e696f2f313975445a362e6a7067",
         viewUrl: "https://google.com",
         codeUrl: "https://google.com"
      }
   ]

   return(
      <>
      {projectsList.map((project) => (
      <div className="project-01 border-1 rounded max-w-[21rem] bg-black border-red-50 w-full">
         <img src={project.imageUrl} className="img-project-01" />
         <div className="details p-2 dark:bg-neutral-800 flex flex-col items-start">
            <p>{project.name}</p>
            <p className="text-xs text-start"></p>
            <div className="stack-links flex justify-between w-full px-1 pt-2">
               <div className="stacks flex gap-1">
                  <IconContext.Provider value={{ className: 'stacks' }}>
                     <RiTailwindCssFill />
                     <FaReact />
                     <RiTailwindCssFill />
                     <FaReact />
                  </IconContext.Provider>
               </div>
               <div className="links  flex gap-2">
                  <IconContext.Provider value={{ className: 'react-icons' }}>
                     <a href={project.viewUrl} target="__blank" title="Visitar"><MdOutlineVisibility /></a>
                     <a href={project.codeUrl} target="__blank" title="Repositório"><FaCode /></a>
                  </IconContext.Provider>
               </div>
            </div>
         </div>
      </div>
      ))}
   </>
   )
}

export default Project