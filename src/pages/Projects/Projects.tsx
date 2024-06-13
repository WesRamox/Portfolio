import SeeMore from "../../components/SeeMore/SeeMore"
import Works from "../../components/Works/Works"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Projects = () => {

   useEffect(() => {
      AOS.init({
         // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
         delay: 100, // values from 0 to 3000, with step 50ms
         duration: 300, // values from 0 to 3000, with step 50ms
       });
    }, [])

   return(
      <section id="projects" className="w-full gap-5 max-[1220px]:px-20 max-[635px]:px-2 flex justify-center dark:bg-neutral-950 dark:bg-opacity-10">
         <div className=" w-full mb-10 px-10 max-[500px]:px-2 spacing flex cursor-default flex-col items-center">
            <h3 className="text-3xl m-10 border-b-[2px] border-y-blue-500 px-1" data-aos="fade">Meus Projetos</h3>
            <div className="box-projects flex flex-row gap-5 flex-wrap justify-center items-center" data-aos="fade" data-aos-delay="100">
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