import Skill from "../../components/Skill/Skill" 

const Skills = () => {

   return(
      <section id="skills" className="p-20 bg-blue-50 dark:bg-zinc-900">
         <div className="flex items-center justify-center">
         <div className="relative z-[0] flex cursor-default items-center justify-center text-center">
            <h3 className="text-4xl absolute dark:text-zinc-200 text-zinc-600">Minhas Habilidades</h3>
            <h3 className="text-7xl opacity-5 dark:text-zinc-50">HABILIDADES</h3>
         </div>
         </div>
         <Skill />
      </section>
   )
}

export default Skills