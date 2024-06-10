import SeeMore from "../../components/SeeMore/SeeMore"
import Works from "../../components/Works/Works"


const Projects = () => {

   return(
      <section id="projects" className="w-full gap-5 flex justify-center dark:bg-neutral-950 dark:bg-opacity-10">
         <div className="box-content w-full mb-10 px-10 spacing flex cursor-default flex-col items-center">
            <h3 className="text-3xl m-10 border-b-[2px] border-y-blue-500 px-1">Meus Projetos</h3>
            <div className="box-projects flex flex-row gap-5 flex-wrap justify-center items-center">
               <Works />
            </div>
            <div className="flex items-center mt-10 justify-center">
               <SeeMore />
            </div>
         </div>
      </section>
   )
}

export default Projects