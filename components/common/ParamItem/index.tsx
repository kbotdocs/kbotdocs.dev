import {HTMLAttributes} from "react";
import MDXClient from "@/components/common/MDXClient";
import Param from "@/components/common/Param";

interface ParamItemProps extends HTMLAttributes<HTMLTableRowElement> {
    param: string;
    type: string;
    optional?: boolean;
    defaultVal?: string;
}

export default function ParamItem({param, type, optional, defaultVal, children}: ParamItemProps) {
    return (
        <tr className={`border-b border-default first:border-t`}>
            <td className={"p-[12px]"}>
                <Param param={param} type={type} optional={optional} />
                <div className={"flex flex-col gap-[8px] my-[4px]"}>
                    {children}
                </div>
                {
                    defaultVal && (
                        <span className={"[&>*]:align-middle [&>*]:inline text-sm"}>
                            <span>기본값: </span>
                            <MDXClient source={defaultVal}/>
                        </span>
                    )
                }
            </td>
        </tr>
    )
}