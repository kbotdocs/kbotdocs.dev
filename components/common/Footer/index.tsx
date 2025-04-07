"use client";

import Icon from "@/components/common/Icon";
import {Link} from "react-transition-progress/next";
import ThemeButton from "@/components/common/ThemeButton";

export default function Footer() {
    return (
      <footer
        className={"flex justify-center py-[64px] w-full bg-layer1 px-screen-x-default md:px-screen-x-md"}>
        <div
          className={"flex justify-between p-none gap-[16px] box-border w-full md:max-w-main-md"}>
          <div className={"flex items-center gap-[14px]"}>
            <Icon icon={"PidocIcon"}
                  className={"flex items-center w-[28px] h-[28px] fill-default md:w-[32px] md:h-[32px]"}/>
          </div>
          <div className={"flex items-center gap-[12px]"}>
            <Link href={"https://github.com/kbotdocs"}>
              <Icon icon={"GithubIcon"} className={"fill-default w-[24px] h-[24px]"} />
            </Link>
          </div>
        </div>
      </footer>
    );
}