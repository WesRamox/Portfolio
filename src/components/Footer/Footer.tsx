import "./Footer.css"

const Footer = () => {
   
   return (
      <div className="flex flex-col items-center justify-center h-20 bg-slate-300 dark:bg-zinc-900">
         <p>Copyright © 2024. Todos os Diretos Reservados.</p>
         <p>Design por <a href="https://linkedin.com/in/wesleyramox/" className="text-blue-500">Wesley Ramos</a></p>
      </div>
   )
}

export default Footer