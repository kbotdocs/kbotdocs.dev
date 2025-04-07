import React, {HTMLAttributes, useEffect, useState, useRef} from "react";
import Icon from "@/components/common/Icon";
import Page from "@/components/common/Page";
import {usePathname} from "next/navigation";

interface IPage extends HTMLAttributes<HTMLLIElement> {
  docCategory: DocCategory;
  fold?: boolean;
  noEmphasis?: boolean;
  onLinkClick?: () => void;
}

export default function PageDir({docCategory, fold, noEmphasis, onLinkClick, children, className, ...p}: IPage) {
  const [isFold, setFold] = useState<boolean>(fold || false);

  const buttonOnClickHandler = () => {
    setFold(v => !v);
  };

  return (
    <li className={`list-none rounded leading-relaxed ${className || ""}`} {...p}>
      <div className={"inline-flex items-center gap-[.5rem] py-[.25em] w-full cursor-pointer select-none text-sm lg:py-0"} onClick={buttonOnClickHandler}>
        <Icon icon={"ArrowIcon"}
              className={`stroke-default w-[.75rem] h-[.75rem] ${(isFold) ? "rotate-[0deg]" : "rotate-[90deg]"}`}/>
        {docCategory.label}
      </div>
      <ul className={`h-full leading-relaxed overflow-hidden text-sm mt-0 ml-[.5rem] p-none border-0 rounded-[0] select-none ${(isFold) ? "hidden" : "block"}`}>
        {
          (docCategory.docs && docCategory.docs.length > 0) &&
            docCategory.docs.filter(e => !e.hide).map((e, i) => <Page key={i} doc={e} noEmphasis={noEmphasis}/>)
        }
      </ul>
    </li>
  );
}