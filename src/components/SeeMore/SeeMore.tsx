import { CgDetailsMore } from "react-icons/cg";

const SeeMore = () => {

   return(
      <a target="__blank" href="https://github.com/WesRamox/" className="flex cursor-pointer items-center hover:text-blue-500 gap-1 h-10 rounded bg-transparent border-[1px] text-black dark:text-white dark:border-zinc-200 border-zinc-900 px-5 py-2 hover:border-[1px] hover:border-blue-700">
         Ver mais <CgDetailsMore size="20" />
      </a>
   )
}

export default SeeMore