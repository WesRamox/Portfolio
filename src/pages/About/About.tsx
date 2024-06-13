import profile from "../../assets/Profile.jpg"
import { LiaPlusCircleSolid } from "react-icons/lia";

const About = () => {

   return(
      <section id="about" className="w-full h-screen max-[1220px]:px-20 max-[520px]:px-2 min-h-[1050px] gap-16 dark:bg-neutral-950 dark:bg-opacity-10 px-56 flex flex-col pt-24 items-center"> 
      <div className="relative z-[-1] flex cursor-default items-center justify-center text-center">
         <h3 className="text-5xl absolute dark:text-zinc-200 max-[845px]:text-3xl text-zinc-600">Um pouco sobre mim</h3>
         <h3 className="text-9xl opacity-5 dark:text-zinc-50 max-[845px]:text-7xl">SOBRE MIM</h3>
      </div>
         <div className="relative gap-10">
            <div className="about_text max-w-[555px] max-[1220px]:text-sm text-xl min-w-[400px] gap-5 flex flex-col justify-around">
               <h3 className="cursor-default text-start">
                  Olá! Sou <span className="text-blue-500">Wesley</span>, um desenvolvedor<span className="text-blue-500"> Front End </span>
                  apaixonado por tecnologia e atualmente cursando Análise e 
                  Desenvolvimento de Sistemas. Desde que me lembro, sempre tive um fascínio por 
                  como as coisas funcionam, o que naturalmente me levou ao mundo do desenvolvimento de software. 
                  Adoro a emoção de transformar ideias em realidade através de código.
               </h3>
               <p className="cursor-default text-start">
                  Meu interesse por tecnologia não se limita apenas ao desenvolvimento. 
                  Sou um solucionador de problemas nato, sempre buscando a melhor maneira de superar desafios técnicos e oferecer soluções eficientes.
                  Acredito que cada problema é uma oportunidade de aprender e crescer, e essa mentalidade me 
                  motiva a continuar explorando novas tecnologias e aprimorando minhas habilidades.
               </p>
            </div>
            <div className="absolute top-52 left-full max-[1220px]:hidden ml-10">
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