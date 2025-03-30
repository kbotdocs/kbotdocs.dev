import {HTMLAttributes} from "react";
import Link from "next/link";
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
                  className={"flex items-center gap-[16px] p-[12px_16px] rounded-lg hover:no-underline hover:bg-default-hover hover:bg-gradient-to-r hover:from-[theme(backgroundColor.layer2)] hover:to-[theme(backgroundColor.default)]"}>
              <Icon icon={"ArrowIcon"} className={"w-[1rem] h-[1rem] stroke-default rotate-[180deg]"}/>
              <div className={"flex flex-col gap-[4px]"}>
                <p className={"font-bold text-default"}>이전</p>
                <p>{prevTitle}</p>
              </div>
            </Link>
          )
        }
      </div>
      <div className={`${next ? "block" : "hidden"} md:block`}>
        {
          next && (
            <Link href={`/${next}`}
                  className={"flex flex-row-reverse items-center gap-[16px] p-[12px_16px] rounded-lg hover:no-underline hover:bg-gradient-to-l hover:from-[theme(backgroundColor.layer2)] hover:to-[theme(backgroundColor.default)]"}>
              <Icon icon={"ArrowIcon"} className={"w-[1rem] h-[1rem] stroke-default"}/>
              <div className={"flex flex-col items-end gap-[4px]"}>
                <p className={"font-bold text-default"}>다음</p>
                <p>{nextTitle}</p>
              </div>
            </Link>
          )
        }
      </div>
    </div>
  );
}