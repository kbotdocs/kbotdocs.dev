import {HTMLAttributes} from "react";

interface DropdownProps extends HTMLAttributes<HTMLUListElement> {
  label: string;
}

export default function Dropdown({label, className, children}: DropdownProps) {
  return (
    <div className={`relative [&:hover>div::after]:block [&:hover>ul]:block ${className || ""}`}>
      <div className={"relative p-[8px_12px] rounded-md hover:bg-default-hover cursor-default " +
        "after:content-[''] after:hidden after:absolute after:top-[100%] after:left-0 after:w-full after:h-[8px]"}>
        {label}
      </div>
      <ul className={"absolute hidden mt-[8px] p-[8px] w-[225px] rounded-md bg-default border border-default"}>
        {children}
      </ul>
    </div>
  );
}