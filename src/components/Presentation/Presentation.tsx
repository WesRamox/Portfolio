import './Presentation.css'
import present from '../../assets/Wesley.png'
import Links from '../Links/Links'
import MyWorksBtn from '../MyWorksBtn/MyWorksBtn'
import DownloadCV from '../DownloadCV/DownloadCV'

const Presentation = () => {

   return(
         <div className='flex justify-between w-full max-[768px]:flex-col-reverse max-[768px]:gap-6 items-center cursor-default'>
            <div className="left-box flex items-start flex-col max-[768px]:items-center justify-center">
               <p className="text-4xl max-[1400px]:text-3xl">Olá, eu sou</p>
               <h2 className="text-4xl max-[1400px]:text-3xl font-semibold">Wesley Ramos</h2>
               <h1 className="font-bold text-6xl tracking-wider w-62 flex text-start max-[768px]:text-center max-[768px]:w-82 max-[405px]:text-2xl max-[1400px]:text-4xl flex-col">
                  DESENVOLVEDOR 
                  <span className="max-[768px]:text-5xl max-[768px]:tracking-[.14em] dark:text-gray-300 max-[405px]:text-3xl text-zinc-900">FRONT END</span>
               </h1>
               <div className="buttons flex max-[768px]:flex-col max-[768px]:gap-5 gap-2 items-center justify-center mt-3">
                  <div className="flex gap-2 max-[405px]:flex-col">
                     <DownloadCV />
                     <MyWorksBtn />
                  </div>
                  <div className="hidden justify-center items-center max-[768px]:flex">
                     <Links />
                  </div>
               </div>
            </div>
            <div className="right-box lg:justify-center lg:items-center">
               <img src={present} alt="" className='w-96 min-w-96 max-[900px]:min-w-72 max-[900px]:w-72 rounded-full' />
               <div className="flex justify-center items-center max-[768px]:hidden">
                  <Links />
               </div>
               
            </div>
         </div>
   )
}

export default Presentation