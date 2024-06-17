import "./Footer.css"

const Footer = () => {
   
   return (
      <footer className="bg-blue-50 p-4 cursor-default dark:bg-zinc-900">
         <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#home" className="hover:underline">Wesley Ramos</a>. Todos os direitos reservados.
            </span>
            <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
               <li>
                     <a href="#about" className="hover:underline me-4 md:me-6">Sobre</a>
               </li>
               <li>
                     <a href="mailto:wesleydev.pessoal@gmail.com" className="hover:underline">Contato</a>
               </li>
            </ul>
         </div>
      </footer>
   )
}

export default Footer