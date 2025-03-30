import {HTMLAttributes} from "react";
import {Link} from "react-transition-progress/next";
import Icon from "@/components/common/Icon";
import {getPage} from "@/utils/Page";

interface MileStoneProps extends HTMLAttributes<HTMLDivElement> {
  prev?: string;
  next?: string;
}

export default async function MileStone({prev, next}: MileStoneProps) {
  let prevTitle, nextTitle;

  if (prev) {
    const {frontmatter} = await getPage(prev.split("/"));
    prevTitle = frontmatter.title;
  }
  if (next) {
    const {frontmatter} = await getPage(next.split("/"));
    nextTitle = frontmatter.title;
  }

  return (
    <div className={"grid grid-rows-2 gap-[16px] md:grid-rows-none md:grid-cols-2"}>
      <div className={`${prev ? "block" : "hidden"} md:block`}>
        {
          prev && (
            <Link href={`/${prev}`}
                  className={"flex items-center gap-[12px] p-[10px_12px] rounded-lg border border-default hover:bg-default-hover hover:no-underline"}>
              <Icon icon={"ArrowIcon"} className={"w-[1rem] h-[1rem] stroke-default rotate-[180deg]"}/>
              <div className={"flex flex-col gap-[4px]"}>
                <p className={"text-sm text-description"}>이전</p>
                <p className={"text-default"}>{prevTitle}</p>
              </div>
            </Link>
          )
        }
      </div>
      <div className={`${next ? "block" : "hidden"} md:block`}>
        {
          next && (
            <Link href={`/${next}`}
                  className={"flex flex-row-reverse items-center gap-[12px] p-[10px_12px] rounded-lg border border-default hover:bg-default-hover hover:no-underline"}>
              <Icon icon={"ArrowIcon"} className={"w-[1rem] h-[1rem] stroke-default"}/>
              <div className={"flex flex-col items-end gap-[4px]"}>
                <p className={"text-sm text-description"}>다음</p>
                <p className={"text-default"}>{nextTitle}</p>
              </div>
            </Link>
          )
        }
      </div>
    </div>
  );
}