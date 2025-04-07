import React, {HTMLAttributes} from "react";
import {usePathname} from "next/navigation";
import {Link} from "react-transition-progress/next";
import MDXClient from "@/components/common/MDXClient";

interface IPage extends HTMLAttributes<HTMLDivElement> {
  doc: DocInfo;
  noEmphasis?: boolean;
  onLinkClick?: () => void;
}

export default function Page({doc, noEmphasis, onLinkClick, className}: IPage) {
  const pathname = usePathname();
  const isCurrentPage = doc.path === pathname;

  return (
    <li className={`list-none p-[.25em_1em] rounded-r border-l-[2px] ${(!noEmphasis && isCurrentPage) ? "border-l-blue text-blue bg-blue-layer1 font-semibold hover:text-blue" : "border-l-default text-description font-normal hover:border-l-default-hover"} cursor-pointer break-all lg:py-0 hover:text-default`}>
      <Link className={"inline-block w-full text-inherit visited:text-inherit [&_code]:text-[.95em] [&_code]:tracking-tight"} href={doc.path} onClick={onLinkClick}><MDXClient source={doc.label}/></Link>
    </li>
  );
}