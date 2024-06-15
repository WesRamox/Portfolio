import { ITech } from "../interfaces/ITech"

export function useTechs() {
   const techsInform: ITech[] = [
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
         name: "TAILWIND",
         description: "...",
         experience: "2 years"
      },
      {
         id: 8,
         name: "TYPESCRIPT",
         description: "...",
         experience: "2 years"
      },
   ];

   return { techsInform }
}