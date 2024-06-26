import Presentation from "../../components/Presentation/Presentation"

const Home = () => {

   return (
      <section id="home" className="w-full h-screen px-56 flex max-[1220px]:px-20 max-[520px]:px-2 justify-center items-center min-h-[800px] dark:from-cyan-900 dark:to-blue-950 bg-gradient-to-r from-cyan-500 to-blue-500">
         <div className="flex items-center justify-center spacing">
            <Presentation />
         </div>
      </section>
   )
}

export default Home