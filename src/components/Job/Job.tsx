export default function Job() {

  return(
    <div className="flex gap-3">
      <div className="flex flex-col justify-around">
        <p>1</p>
        <p>2</p>
      </div>
      <div className="exp flex flex-col gap-3">
        <div className="flex flex-col text-start border-l-[1px] pl-2 border-blue-600">
          <h2 className="text-2xl dark:text-zinc-300 text-zinc-700">Desenvolvedor Front End</h2>
          <h3 className="flex gap-2 text-xl">
            <span>Em <span className="text-blue-500">Yaslip</span></span>
            <span className="dark:text-zinc-400 text-gray-500 italic">07/2024 - Atual</span>
          </h3>
        </div>
        <div className="flex flex-col text-start border-l-[1px] pl-2 border-blue-300">
          <h2 className="text-2xl dark:text-zinc-300 text-zinc-700">Desenvolvedor Full Stack</h2>
          <h3 className="flex gap-2 text-xl">
            <span><span className="dark:text-blue-300">Freelancer</span></span>
            <span className="dark:text-zinc-400 text-gray-500 italic">12/2023 - Atual</span>
          </h3>
        </div>       
      </div>
    </div>
    
  )
}