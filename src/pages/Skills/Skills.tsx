import Skill from "../../components/Skill/Skill" 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Skills = () => {

   useEffect(() => {
      AOS.init({
         // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
         delay: 100, // values from 0 to 3000, with step 50ms
         duration: 300, // values from 0 to 3000, with step 50ms
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