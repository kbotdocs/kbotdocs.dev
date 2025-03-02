import {HTMLAttributes} from "react";
import RequestMethod from "@/components/common/RequestMethod";

interface IEndpoint extends HTMLAttributes<HTMLSpanElement> {
    method: RequestMethod;
    endpoint: string;
}

export default function Endpoint({method, endpoint, children, ...p}: IEndpoint) {
    return (
        <span className={``} {...p}>
            <RequestMethod method={method} className={"mr-[6px]"} />
            <span className={"inline [&>p]:inline"}>{children}</span>
        </span>
    );
}