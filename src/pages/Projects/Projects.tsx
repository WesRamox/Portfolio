import Project from "../../components/Project/Project"

const Projects = () => {

   return(
      <section id="projects" className="w-full h-screen flex justify-center">
         <div className="box-content w-full mt-20 px-10 flex flex-col">
            <h3 className="text-3xl m-10">Meus Projetos</h3>
            <div className="box-projects flex flex-row gap-3 flex-wrap justify-center items-center">
               <Project />
            </div>
         </div>
      </section>
   )
}

export default Projects