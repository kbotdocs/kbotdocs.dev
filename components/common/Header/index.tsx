"use client";

import React, {useEffect, useRef} from "react";
import {Link} from "react-transition-progress/next";
import Icon from "@/components/common/Icon";
import ThemeButton from "@/components/common/ThemeButton";
import IconButton from "@/components/common/IconButton";
import {usePathname} from "next/navigation";
import TOC from "@/components/common/TOC";
import PageNav from "@/components/common/PageNav";
import Dropdown from "@/components/common/Dropdown";
import {DocNavigation} from "@/constants/docs";
import DropdownItem from "@/components/common/DropdownItem";
import PageDir from "@/components/common/PageDir";

export default function Header() {
  const scrollTo = useRef<number>(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const hamburgerButtonOnClickHandler = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();

      document.body.style.cssText = `
                position: fixed;
                top: -${window.scrollY}px;
                overflow-y: ${(window.innerHeight <= document.body.scrollHeight) ? "scroll" : "auto"};
                width: 100%;
            `;
      scrollTo.current = parseInt(document.body.style.top || "0", 10) * -1;
    }
  };

  const cancelButtonOnClickHandler = () => {
    document.body.style.cssText = "";
    window.scrollTo(0, scrollTo.current);

    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  useEffect(() => {
    if (dialogRef.current) {
      if (dialogRef.current.open) {
        document.body.style.cssText = "";
        window.scrollTo(0, 0);
        dialogRef.current.close();
      }
    }
  }, [pathname]);

  return (
    <header
      className={"flex justify-center items-center fixed top-0 left-0 z-[2] w-full h-header bg-default border-b border-b-default px-screen-x-default md:px-screen-x-md"}>
      <div
        className={"flex flex-row justify-between items-center p-none gap-[16px] box-border w-full h-full md:max-w-main-md"}>
        <Link href={"/"}>
          <Icon icon={"PidocIcon"}
                className={"flex items-center w-[28px] h-[28px] fill-logo md:w-[32px] md:h-[32px]"}/>
        </Link>
        <div
          className={"flex flex-row justify-between flex-1 p-none gap-[16px] box-border w-full h-full md:max-w-main-md"}>
          <div className={"flex items-center gap-[8px]"}>
            <Dropdown label={"레퍼런스"} className={"hidden lg:block"}>
              {
                DocNavigation["/reference"].map((e, i) =>
                  <DropdownItem key={i} label={e.label} path={(e as DocInfo).path}/>
                )
              }
            </Dropdown>
            <Dropdown label={"자습서"} className={"hidden lg:block"}>
              {
                DocNavigation["/learn"].map((e, i) =>
                  <DropdownItem key={i} label={e.label} path={(e as DocInfo).path}/>
                )
              }
            </Dropdown>
          </div>
          <div className={"flex items-center gap-[12px]"}>
            <ThemeButton/>
            <IconButton className={"lg:hidden"} icon={"HamburgerButtonIcon"} onClick={hamburgerButtonOnClickHandler}/>
          </div>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className={"fixed top-0 bottom-auto left-auto right-0 [&:modal]:max-h-screen [&::backdrop]:bg-default [&::backdrop]:opacity-75"}>
        <div
          className={"grid grid-rows-[theme(height.header)_auto] w-[320px] h-screen rounded-[16px_0_0_16px] border-[1px] border-default border-r-[0px] bg-default"}>
          <div className={"flex justify-end items-center px-[16px]"}>
            <IconButton icon={"CancelIcon"} onClick={cancelButtonOnClickHandler}/>
          </div>
          <div className={"flex-1 p-[16px] overflow-auto " +
            "[&>*::after]:content-[''] [&>*::after]:block [&>*::after]:my-[24px] [&>*::after]:w-full [&>*::after]:h-[1px] [&>*::after]:bg-[theme(borderColor.default)] [&>:last-child::after]:hidden"}>
            <div>
              <PageDir docCategory={{label: "레퍼런스", docs: (DocNavigation["/reference"] as DocInfo[])}} fold noEmphasis/>
              <PageDir docCategory={{label: "자습서", docs: (DocNavigation["/learn"] as DocInfo[])}} fold noEmphasis/>
            </div>
            <TOC/>
            <PageNav/>
          </div>
        </div>
      </dialog>
    </header>
  );
}
