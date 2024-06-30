import { IconContext } from "react-icons"
import { projects } from "../../../data/MockProjects";
import { DiGithubFull } from "react-icons/di";
import { FaEye } from "react-icons/fa";
import { IProjectProps } from "../../../interfaces/IProjectProps";

export const StackAppend = (props: any) => {
  return (
    <div {...props}>
      {props.children}
    </div>
  );
};

export const Links = (props: IProjectProps) => {
  const idProp: number = Number(props.id)

  return(
    <div {...props}>
      <IconContext.Provider value={{ className: 'stacks' }}>
        <a href={projects[`${idProp}`].deploy} target="__blank" title="Visitar" className="hover:text-zinc-400">
          <FaEye />
        </a>
        <a href={projects[`${idProp}`].github} target="__blank" title="Repositório" className="hover:text-zinc-400">
          <DiGithubFull />
        </a>
      </IconContext.Provider>
    </div>
  )
}