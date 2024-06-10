import profile from "../../assets/Profile.jpg"

const About = () => {

   return(
      <section id="about" className="w-full h-screen gap-16 dark:bg-neutral-950 dark:bg-opacity-10 px-56 flex flex-col pt-24 items-center"> 
      <div className="relative z-[-1] flex cursor-default items-center justify-center text-center">
         <h3 className="text-5xl absolute dark:text-zinc-200 text-zinc-600">Um pouco sobre mim</h3>
         <h3 className="text-9xl opacity-5 dark:text-zinc-50">SOBRE MIM</h3>
      </div>
         <div className="flex gap-10">
            <div className="max-w-[550px] min-w-[300px]">
               <img src={profile} alt="Wesley Ferreira Ramos" className="rounded-e-3xl border-2 border-blue-500 w-[28rem]" />
            </div>
            <div className="about_text max-w-[555px] min-w-[400px] gap-5 flex flex-col justify-around">
               <h3 className="cursor-default text-xl text-start">
                  Olá! Sou <span className="text-blue-500">Wesley</span>, um desenvolvedor<span className="text-blue-500"> Front End </span>
                  apaixonado por tecnologia e atualmente cursando Análise e 
                  Desenvolvimento de Sistemas. Desde que me lembro, sempre tive um fascínio por 
                  como as coisas funcionam, o que naturalmente me levou ao mundo do desenvolvimento de software. 
                  Adoro a emoção de transformar ideias em realidade através de código.
               </h3>
               <p className="cursor-default text-xl text-start">
                  Meu interesse por tecnologia não se limita apenas ao desenvolvimento. 
                  Sou um solucionador de problemas nato, sempre buscando a melhor maneira de superar desafios técnicos e oferecer soluções eficientes.
                  Acredito que cada problema é uma oportunidade de aprender e crescer, e essa mentalidade me 
                  motiva a continuar explorando novas tecnologias e aprimorando minhas habilidades.
               </p>
            </div>
         </div>
      </section>
   )
}

export default About