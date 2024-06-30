import { projects } from "../../data/MockProjects";
import { Links } from "./StackLinks/StackLinks";
import { StackAppend } from "./StackLinks/StackLinks";
import { IProjectProps } from "../../interfaces/IProjectProps";

export const Project = (props: IProjectProps) => {
  const idProp: number = Number(props.id)
  return (
    <div {...props}>
      <img
        src={projects[`${idProp}`].image_url}
        className="img-project-01 h-[250px]"
      />
      <div className="details p-3 min-h-[181px] dark:bg-neutral-800 justify-around flex flex-col items-start">
        <div className="stack-links flex flex-col justify-between w-full pt-2">
          <div className="flex flex-col text-start">
            <p className="text-xl dark:text-white ">
              {projects[`${idProp}`].name}
            </p>
            <p className="text-sm text-start py-2 dark:text-zinc-300 text-zinc-800">
              {projects[`${idProp}`].description}
            </p>
          </div>
          <StackAppend className="flex justify-between mt-2">
            {props.children}
            <Links id={`${idProp}`} className="flex gap-3" />
          </StackAppend>
        </div>
      </div>
    </div>
  );
};
