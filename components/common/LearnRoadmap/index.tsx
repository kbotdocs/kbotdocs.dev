import {HTMLAttributes} from "react";

interface LearnRoadmapProps extends HTMLAttributes<HTMLDivElement> {

}

export default function LearnRoadmap({children}: LearnRoadmapProps) {
  return (
    <div className={"flex items-center gap-[24px] w-full overflow-x-auto"}>
      {children}
    </div>
  );
}