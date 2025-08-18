import { PiDevicesDuotone } from "react-icons/pi";
import { FaConnectdevelop } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";

export default function Job() {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col justify-around">
        <FaConnectdevelop size={30} />
        <PiDevicesDuotone size={30} />
        <SiFreelancer size={30} />
      </div>
      <div className="exp flex flex-col gap-3">
        <div className="flex flex-col text-start border-l-[1px] pl-2 border-blue-600">
          <h2 className="text-2xl dark:text-zinc-300 text-zinc-700 max-sm:text-md max-sm:text-sm">
            Líder Técnico de Front-end
          </h2>
          <h3 className="flex gap-2 text-xl">
            <span className="text-blue-500 max-sm:text-md max-sm:text-sm">
              Yaslip
            </span>
            <span className="dark:text-zinc-400 text-gray-500 italic max-sm:text-md max-sm:text-sm">
              07/2024 - Atual
            </span>
          </h3>
        </div>
        <div className="flex flex-col text-start border-l-[1px] pl-2 border-blue-600">
          <h2 className="text-2xl dark:text-zinc-300 text-zinc-700 max-sm:text-md max-sm:text-sm">
            Desenvolvedor Front End
          </h2>
          <h3 className="flex gap-2 text-xl">
            <span className="text-blue-500 max-sm:text-md max-sm:text-sm">
              Yaslip
            </span>
            <span className="dark:text-zinc-400 text-gray-500 italic max-sm:text-md max-sm:text-sm">
              07/2024 - 05/2025
            </span>
          </h3>
        </div>
        <div className="flex flex-col text-start border-l-[1px] pl-2 border-blue-300">
          <h2 className="text-2xl dark:text-zinc-300 text-zinc-700 max-sm:text-md max-sm:text-sm">
            Desenvolvedor Full Stack
          </h2>
          <h3 className="flex gap-2 text-xl">
            <span className="dark:text-blue-300 text-blue-500 max-sm:text-md max-sm:text-sm">
              Freelancer
            </span>
            <span className="dark:text-zinc-400 text-gray-500 italic max-sm:text-md max-sm:text-sm">
              12/2023 - 08/2024
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
