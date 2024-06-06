import './Presentation.css'
import present from '../../assets/Wesley.png'
import Links from '../Links/Links'

const Presentation = () => {

   return(
         <div className='flex justify-between w-full'>
            <div className="left-box flex items-start flex-col justify-center">
               <p className="text-3xl">Olá, eu sou</p>
               <h2 className="text-3xl font-semibold">Wesley Ramos</h2>
               <h1 className="font-bold tracking-wider w-60 flex text-end">DESENVOLVEDOR FRONT END</h1>
            </div>
            <div className="right-box lg:justify-center lg:items-center">
               <img src={present} alt="" className='w-96 min-w-96 rounded-full' />
               <div className="flex justify-center items-center">
                  <Links />
               </div>
               
            </div>
         </div>
   )
}

export default Presentation