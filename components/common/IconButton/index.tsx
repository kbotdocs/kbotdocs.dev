"use client";

import {ButtonHTMLAttributes} from "react";
import Icon from "@/components/common/Icon";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Icons;
}

export default function IconButton({className, icon, ...props}: IconButtonProps) {
  return (
    <button className={`flex justify-center items-center relative rounded w-[36px] h-[36px] border-none outline-none bg-default cursor-pointer select-none hover:bg-default-hover hover:stroke-default-hover ${className || ""}`}
            {...props}>
      <Icon icon={icon} className={"w-[18px] h-[18px] stroke-default"}/>
    </button>
  );
}