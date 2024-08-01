import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Job from '../../components/Job/Job';

const Experience = () => {

      useEffect(() => {
      AOS.init({
         // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
         delay: 100, // values from 0 to 3000, with step 50ms
         duration: 300, // values from 0 to 3000, with step 50ms
       });
    }, [])

   return(
      <section id="experience" className="w-full max-[1220px]:px-20 max-[520px]:px-10 gap-16  dark:bg-neutral-950 dark:bg-opacity-10 bg-white px-56 flex flex-col py-24 items-center"> 
        <div className="relative z-[1] flex cursor-default items-center justify-center text-center" data-aos="fade-up">
          <h3 className="text-6xl absolute dark:text-zinc-200 max-[845px]:text-3xl max-[550px]:text-2xl text-zinc-600">Experiência</h3>
          <h3 className="text-8xl opacity-5 dark:text-zinc-50 max-[845px]:text-7xl max-[550px]:text-5xl">EXPERIÊNCIA</h3>
        </div>
        <div className="relative gap-10" data-aos="fade-up" data-aos-delay="300">
          <Job />
        </div>
      </section>
   )
}

export default Experience