"use client";

import React, {useState, useEffect, useRef, HTMLAttributes} from "react";
import {usePathname} from "next/navigation";

interface TOCProps extends HTMLAttributes<HTMLUListElement> {
  onAnchorClick?: {
    before?: () => void;
    after?: () => void;
  };
}

export default function TOC({onAnchorClick, className, ...p}: TOCProps) {
  const [headers, setHeaders] = useState<Element[]>([]);
  const [pageInViewport, setPageInViewport] = useState<string>("");
  const scrollToRef = useRef<number>(0);
  const pathname = usePathname();

  const liOnClickHandler = (id: string) => {
    if (document.getElementById(id)) {
      onAnchorClick?.before && onAnchorClick.before();
      window.scrollBy({
        top: document.getElementById(id)!.getBoundingClientRect().top - 160
      });
      scrollToRef.current += document.getElementById(id)!.getBoundingClientRect().top - 160;
      onAnchorClick?.after && onAnchorClick.after();
    }
  };

  useEffect(() => {
    const target = document.getElementById("doc");
    const callback = () => {
      if (document.querySelectorAll(".section h2, .section h3")) {
        setHeaders(Array.from(document.querySelectorAll(".section h2, .section h3")));
      }
    };
    const options: MutationObserverInit = {attributes: true, childList: true, subtree: true};
    const observer = new MutationObserver(callback);

    if (target) {
      callback();
      observer.observe(target, options);
    }
    else {
      setHeaders([]);
    }
  }, [pathname]);

  useEffect(() => {
    const listeners: (() => void)[] = [];

    const scrollEventListener = (e: Element, i: number) => {
      if ((e.getBoundingClientRect().y <= 175) && ((i === headers.length - 1) || (headers[i + 1].getBoundingClientRect().y > 175))) {
        if (pageInViewport !== e.id) setPageInViewport(e.id);
      }
      if ((i === 0) && (e.getBoundingClientRect().y > 175)) {
        setPageInViewport("");
      }
    }

    if (headers.length > 0) {
      headers.forEach((e, i) => {
        listeners.push(() => scrollEventListener(e, i));
      });
      listeners.forEach((e) => {
        e();
        window.addEventListener("scroll", e, {passive: true});
      });
    }

    return (() => {
      listeners.forEach((e) => {
        window.removeEventListener("scroll", e);
      });
    });
  }, [headers, pageInViewport]);

  return (
    (headers.length > 0) ?
      <ul
        className={`leading-relaxed overflow-auto text-sm mt-0 p-none border-0 rounded-[0] select-none ${className}`} {...p}>
        {
          headers.map((e, i) => (
            <li key={i} id={`a${e.id}`}
                className={`list-none p-[.25em_1em] rounded-r ${(e.classList.contains("sub")) ? "pl-[2em]" : ""} border-l-[2px] ${(pageInViewport === e.id) ? "border-l-blue text-blue bg-blue-layer1 font-semibold" : "border-l-default text-description font-normal hover:border-l-default-hover"} cursor-pointer break-all lg:py-0 hover:text-default`}
                onClick={() => liOnClickHandler(e.id)}>{e.textContent}</li>
          ))
        }
      </ul>
      :
      <></>
  );
}