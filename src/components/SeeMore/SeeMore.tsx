import { IoIosMore } from "react-icons/io";

const SeeMore = () => {

   return(
      <button className="flex items-center hover:text-blue-500 gap-1 h-10 rounded bg-transparent border-[1px] text-black dark:text-white dark:border-zinc-200 border-zinc-900 px-5 py-2 hover:border-[1px] hover:border-blue-600">
         Ver mais <IoIosMore size="20px" />
      </button>
   )
}

export default SeeMore