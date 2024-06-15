import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt, FaGithub  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { IconContext } from "react-icons";
import "./Skill.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'

const Skill = ({ id }: { id: string }) => {

   useEffect(() => {
      AOS.init({
         // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
         delay: 100, // values from 0 to 3000, with step 50ms
         duration: 300, // values from 0 to 3000, with step 50ms
       });
   }, [])

   interface tech {
      id: number
      name: string
      description: string
      experience: string
   }

   let [techInfo, setTech] = useState(0)

   const techsInform: tech[] = [
      {
         id: 0,
         name: "HTML5",
         description: "...",
         experience: "2 years",
      },
      {
         id: 1,
         name: "CSS",
         description: "...",
         experience: "2 years"
      },
      {
         id: 2,
         name: "BOOTSTRAP",
         description: "...",
         experience: "2 years"
      },
      {
         id: 3,
         name: "GIT",
         description: "...",
         experience: "2 years"
      },
      {
         id: 4,
         name: "GITHUB",
         description: "...",
         experience: "2 years"
      },
      {
         id: 5,
         name: "REACT",
         description: "...",
         experience: "2 years"
      },
      {
         id: 6,
         name: "JAVASCRIPT",
         description: "...",
         experience: "2 years"
      },
      {
         id: 7,
         name: "Tailwind",
         description: "...",
         experience: "2 years"
      },
      {
         id: 8,
         name: "Typescript",
         description: "...",
         experience: "2 years"
      },
   ]

   function changeTech() {
      console.log(id)
      // if(techInfo === (techsInform.length - 1)) {
      //    setTech(techInfo = 0)
      // } else {
      //    setTech(techInfo = Number(id))
      // }
   }

   return(
      <div className="skills flex flex-col items-center justify-center gap-6">
         <div className="flex max-w-[1300px] items-center justify-center flex-wrap gap-16 mt-10 max-[700px]:gap-8 2xl:gap-24 skills" data-aos="fade-up" data-aos-delay="200">
            <IconContext.Provider value={{ className: "global-stacks" }}>
               <FaHtml5 className="text-[#F16529]" onClick={changeTech} id={"1"} />
               <FaCss3Alt className="text-[#1172B8]" onClick={changeTech} id={"2"}/>
               <FaBootstrap className="text-[#552d91]" onClick={changeTech} id={"3"} />
               <FaGitAlt className="text-[#EE513B]" onClick={changeTech} id={"4"} />
               <FaGithub onClick={changeTech} />
               <FaReact className="text-[#53C1DE]" onClick={changeTech} />
               <IoLogoJavascript className="text-[#f7df1e]" onClick={changeTech} />
               <RiTailwindCssFill className="text-[#44a8c3]" onClick={changeTech} />
               <SiTypescript className="text-[#3178c6]" onClick={changeTech} />
            </IconContext.Provider>
         </div>
         <div className="flex flex-col gap-2 justify-center items-center">
            <h2 className="text-2xl text-blue-500">{techsInform[techInfo].name}</h2>
            <p className="w-96 max-[455px]:w-64">{techsInform[techInfo].description}</p>
            <p className="w-96 text-blue-500 ">{techsInform[techInfo].experience}</p>
         </div>
      </div>
   )
}

export default Skill