import Header from "../Navbar/Header"
import "./Footer.css"

const Footer = () => {
   
   return (
      <div className="flex items-center justify-center h-20 bg-blue-50 dark:bg-zinc-900">
         <Header />
         <p>Copyright © 2024. All rights reserved.</p>
      </div>
   )
}

export default Footer