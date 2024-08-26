import { IProjects } from "../interfaces/IProjects"

export const projects: IProjects[] = [
  {
     id: 1,
     name: "Dev Academy",
     description: "Desbloqueie seu potencial e torne-se um desenvolvedor de software de alta demanda com a Dev Academy!",
     image_url: "https://camo.githubusercontent.com/6453a7d1a3098db562b6d6b4fdf68dd3e5a31f8aedd1e38610547b94dabc13f0/68747470733a2f2f736e6970626f6172642e696f2f47626f6479372e6a7067",
     github: "https://github.com/WesRamox/devAcademy",
     deploy: "https://dev-academy-delta.vercel.app/"
  },
  {
     id: 2,
     name: "React Stock",
     description: "React Stock é um sistema de gerenciamento de estoque. React Stock foca em funcionalidades básicas como controle de quantidade.",
     image_url: "https://camo.githubusercontent.com/6b177a65bc4bc759a8fec5ad8d2aa86dd9641516ad9ecc8673e4ab37ae978120/68747470733a2f2f736e6970626f6172642e696f2f545274734a312e6a7067",
     github: "https://github.com/WesRamox/gestor-de-estoque",
     deploy: "https://gestor-de-estoque-dun.vercel.app/"
  },
  {
     id: 3,
     name: "Meu portfolio",
     description: "Aqui, você encontrará uma coleção dos meus projetos desenvolvidos ao longo da minha trajetória como desenvolvedor.",
     image_url: "https://snipboard.io/8nTNau.jpg",
     github: "https://github.com/WesRamox/Portfolio",
     deploy: "https://wesleyramos.vercel.app/"
  }
]
