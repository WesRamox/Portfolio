import './Presentation.css'
import present from '../../assets/Wesley.png'
import Links from '../Links/Links'
import MyWorksBtn from '../MyWorksBtn/MyWorksBtn'
import DownloadCV from '../DownloadCV/DownloadCV'

const Presentation = () => {

   return(
         <div className='flex justify-between w-full cursor-default'>
            <div className="left-box flex items-start flex-col justify-center">
               <p className="text-4xl">Olá, eu sou</p>
               <h2 className="text-4xl font-semibold">Wesley Ramos</h2>
               <h1 className="font-bold text-6xl tracking-wider w-60 flex text-start">DESENVOLVEDOR FRONT END</h1>
               <div className="buttons flex gap-2 items-center justify-center mt-3">
                  <DownloadCV />
                  <MyWorksBtn />
               </div>
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