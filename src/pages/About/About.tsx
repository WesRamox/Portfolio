import { LiaPlusCircleSolid } from "react-icons/lia";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const About = () => {

      useEffect(() => {
      AOS.init({
         // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
         delay: 100, // values from 0 to 3000, with step 50ms
         duration: 300, // values from 0 to 3000, with step 50ms
       });
    }, [])

   return(
      <section id="about" className="w-full h-screen max-[1220px]:px-20 max-[520px]:px-10 min-h-[700px] gap-16 dark:bg-neutral-950 dark:bg-opacity-10 px-56 flex flex-col pt-24 items-center"> 
      <div className="relative z-[-1] flex cursor-default items-center justify-center text-center" data-aos="fade-up">
         <h3 className="text-5xl absolute dark:text-zinc-200 max-[845px]:text-3xl max-[550px]:text-2xl text-zinc-600">Um pouco sobre mim</h3>
         <h3 className="text-9xl opacity-5 dark:text-zinc-50 max-[845px]:text-7xl max-[550px]:text-5xl">SOBRE MIM</h3>
      </div>
         <div className="relative gap-10" data-aos="slide-up" data-aos-delay="100">
            <div className="about_text max-w-[555px] max-[1220px]:text-sm text-xl max-[430px]:w-[250px] gap-5 flex flex-col justify-around">
               <h3 className="cursor-default text-start">
                  Olá! Sou <span className="text-blue-500">Wesley</span>, um desenvolvedor<span className="text-blue-500"> Front End </span>
                  apaixonado por tecnologia e atualmente cursando Análise e 
                  Desenvolvimento de Sistemas. Desde que me lembro, sempre tive um fascínio por 
                  como as coisas funcionam, o que naturalmente me levou ao mundo do desenvolvimento de software. 
                  Adoro a emoção de transformar ideias em realidade através de código.
               </h3>
            </div>
            <div className="absolute top-20 left-full max-[1220px]:hidden ml-10">
               <button className="flex bg-transparent rounded-full border-none p-0 hover:text-blue-500 transition-all">
                  <LiaPlusCircleSolid size={35}/>
               </button>
            </div>
            <div className="hidden max-[1220px]:flex justify-center items-center mt-10">
               <button className="flex bg-transparent rounded-full border-none p-0 hover:text-blue-500 transition-all">
                  <LiaPlusCircleSolid size={35}/>
               </button>
            </div>
         </div>
      </section>
   )
}

export default About