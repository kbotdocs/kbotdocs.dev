import {TableHTMLAttributes} from "react";
import MDXClient from "@/components/common/MDXClient";

interface ParamListProps extends TableHTMLAttributes<HTMLTableElement> {
    caption?: string;
}

export default function ParamList({caption, children}: ParamListProps) {
    return (
        <table className={"border-collapse w-full h-auto"}>
            {
                caption && (
                    <caption className={"p-[12px] border-b-[2px] border-b-default font-bold text-left"}><MDXClient source={caption} /></caption>
                )
            }
            <tbody className={`${caption ? "[&>:first-child]:border-t-0" : ""}`}>
                {children}
            </tbody>
        </table>
    );
}