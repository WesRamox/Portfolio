export default function Job() {

  return(
    <div className="flex flex-col gap-3">
      <div className="flex flex-col text-start border-l-[1px] pl-2 border-blue-600">
        <h2 className="text-2xl text-zinc-300">Desenvolvedor Front End</h2>
        <h3 className="flex gap-2 text-xl">
          <span>Em <span className="text-blue-500">Yaslip</span></span>
          <span className="text-zinc-400">07/2024 - Atual</span>
        </h3>
      </div>
      <div className="flex flex-col text-start border-l-[1px] pl-2 border-blue-300">
        <h2 className="text-2xl text-zinc-300">Desenvolvedor Full Stack</h2>
        <h3 className="flex gap-2 text-xl">
          <span><span className="text-blue-300">Freelancer</span></span>
          <span className="text-zinc-400">12/2023 - Atual</span>
        </h3>
      </div>
    </div>
    
  )
}