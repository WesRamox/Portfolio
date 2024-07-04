import Skill from "../../components/Skill/Skill" 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Skills = () => {

   useEffect(() => {
      AOS.init({
         delay: 100,
         duration: 300,
       });
    }, [])

   return(
      <section id="skills" className="p-20 max-[1220px]:px-20 max-[520px]:px-3 bg-blue-50 dark:bg-zinc-900">
         <div className="flex items-center justify-center" data-aos="fade" data-aos-delay="100">
            <div className="relative z-[0] flex cursor-default items-center justify-center text-center">
               <h3 className="text-4xl absolute dark:text-zinc-200 text-zinc-600 max-[500px]:text-2xl">Minhas Habilidades</h3>
               <h3 className="text-7xl opacity-10 dark:opacity-5 dark:text-zinc-50 max-[500px]:text-5xl">HABILIDADES</h3>
            </div>
         </div>
         <Skill />
      </section>
   )
}

export default Skills