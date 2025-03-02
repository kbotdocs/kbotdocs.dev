import {HTMLAttributes} from "react";

type MethodStyle = {
    bgColor: string;
    textColor: string;
};

interface RequestMethodProps extends HTMLAttributes<HTMLDivElement> {
    method: RequestMethod;
}

const style: Record<RequestMethod, MethodStyle> = {
    GET: {
        bgColor: "bg-blue-layer1",
        textColor: "text-blue-layer1",
    },
    POST: {
        bgColor: "bg-green-layer1",
        textColor: "text-green-layer1",
    },
    DELETE: {
        bgColor: "bg-red-layer1",
        textColor: "text-red-layer1",
    },
    PUT: {
        bgColor: "bg-purple-layer1",
        textColor: "text-purple-layer1",
    },
    PATCH: {
        bgColor: "bg-yellow-layer1",
        textColor: "text-yellow-layer1",
    }
};

export default function RequestMethod({method, className}: RequestMethodProps) {
    return (
        <span className={`inline rounded-[12px] p-[4px_8px] text-xs font-semibold ${style[method].bgColor} ${style[method].textColor} ${className || ""}`}>
            {method}
        </span>
    );
}