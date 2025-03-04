import {HTMLAttributes} from "react";
import InlineCode from "@/components/common/InlineCode";

interface ParamProps extends HTMLAttributes<HTMLSpanElement> {
    param: string;
    type: string;
    optional?: boolean;
}

export default function Param({param, type, optional}: ParamProps) {
    return (
        <div className={"flex items-center gap-[12px]"}>
            <InlineCode>{param}</InlineCode>
            <span className={"text-sm text-description"}>
                {type}
                {optional ? ` · 선택적` : ""}
            </span>
        </div>
    );
}