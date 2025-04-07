import Image from "next/image";
import {HTMLAttributes} from "react";
import {Link} from "react-transition-progress/next";
import {Docs} from "@/constants/docs";

interface LearnProps extends HTMLAttributes<HTMLDivElement> {
  doc: string;
}

export default function Learn({doc}: LearnProps) {
  const learn = Docs[doc];

  return (
    <div>
      <Link href={learn.path || ""} className={"block w-[192px] h-full text-default visited:text-default"}>
        <Image className={"rounded-lg mb-[8px]"} src={learn.image || ""} alt={learn.label} width={192} height={192}/>
        <div className={"flex flex-col gap-[2px]"}>
          <p className={"font-semibold"}>{learn.label}</p>
          { learn.description && <p className={"text-sm text-description"}>{learn.description}</p> }
        </div>
      </Link>
    </div>
  );
}