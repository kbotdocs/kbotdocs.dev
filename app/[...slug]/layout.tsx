import TOC from "@/components/common/TOC";
import React from "react";
import PageNav from "@/components/common/PageNav";

export default function Layout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className={"flex justify-center mt-header-h px-screen-x-default md:px-screen-x-md"}>
      <div
        className={"relative w-full lg:grid lg:gap-[32px] lg:max-w-main-md lg:grid-cols-[theme(spacing.sidebar-w-lg)_auto]"}>
        <aside className={`hidden w-auto h-auto bg-default lg:block lg:h-full`}>
          <div
            className={`w-full h-auto box-border overflow-auto lg:fixed lg:top-[160px] lg:px-0 lg:max-h-[calc(100vh-160px-64px)] lg:w-sidebar-w-lg ` +
              "[&>*::after]:content-[''] [&>*::after]:block [&>*::after]:my-[24px] [&>*::after]:w-full [&>*::after]:h-[1px] [&>*::after]:bg-[theme(borderColor.default)] [&>:last-child::after]:hidden"}>
            <TOC/>
            <PageNav/>
          </div>
        </aside>
        <main id={"doc"}
              className={"flex flex-col gap-[32px] py-header-main overflow-auto"}>
          {children}
        </main>
      </div>
    </div>
  );
}
