import {HTMLAttributes} from "react";
import {Link} from "react-transition-progress/next";

interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {
  label: string;
  path?: string;
}

export default function DropdownItem({label, path, children}: DropdownItemProps) {
  return (
    <li className={"block rounded text-default text-sm hover:bg-layer1"}>
      <Link href={path || ""} className={"inline-block p-[6px] w-full text-inherit hover:no-underline visited:text-inherit"}>{label}</Link>
    </li>
  );
}