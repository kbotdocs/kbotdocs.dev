"use client";

import {HTMLAttributes, useEffect, useState} from "react";
import {DocNavigation} from "@/constants/docs";
import PageDir from "@/components/common/PageDir";
import Page from "@/components/common/Page";
import {usePathname} from "next/navigation";

interface IPageNav extends HTMLAttributes<HTMLElement> {
  onLinkClick?: () => void;
}

export default function PageNav({className, onLinkClick, ...p}: IPageNav) {
  const [navKey, setNavKey] = useState<string>("");
  const [nav, setNav] = useState<(DocCategory | DocInfo)[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    let pathSlug = pathname.split("/");
    let navKeys = Object.keys(DocNavigation)
      .filter(e => e.split("/").length <= pathSlug.length)
      .filter(e => e.split("/").every((_e, i) => _e === pathSlug[i]));

    navKeys.sort((a, b) => {
      const aLen = a.split("/").length;
      const bLen = b.split("/").length;

      if (aLen > bLen) return -1;
      if (aLen < bLen) return 1;
      return 0;
    });
    
    if (navKey !== navKeys[0]) {
      setNavKey(navKeys[0]);
    }
  }, [navKey, pathname]);

  useEffect(() => {
    setNav(DocNavigation[navKey]);
  }, [navKey]);

  return (
    <nav className={`block overflow-auto ${className || ""}`} {...p}>
      <ul className={`h-full leading-relaxed overflow-hidden text-sm mt-0 p-none border-0 rounded-[0] select-none`}>
        {
          nav && nav.filter(e => !e.hide).map((doc: DocCategory | DocInfo, i: number) => {
            if ("docs" in doc) {
              return (<PageDir key={i} docCategory={doc} onLinkClick={onLinkClick}/>);
            }
            return (<Page key={i} doc={doc} onLinkClick={onLinkClick}/>);
          })
        }
      </ul>
    </nav>
  );
}