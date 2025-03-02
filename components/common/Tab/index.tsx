"use client";

import React, {HTMLAttributes, useState, useRef, useEffect} from "react";

interface ITab extends HTMLAttributes<HTMLDivElement> {
    label: string[];
}

export default function Tab({ label, className, children, ...p }: ITab) {
    const [ selectedIndex, setSelectedIndex ] = useState<number>(0);
    const tabItemsRef = useRef<HTMLDivElement>(null);

    const tabOnClickHandler = (i: number) => {
        setSelectedIndex(i);
    };

    useEffect(() => {
        if (tabItemsRef.current) {
            Array.from(tabItemsRef.current.children).find(e => e.classList.contains("selected"))?.classList.remove("selected");
            tabItemsRef.current.children.item(selectedIndex)?.classList.add("selected");
        }
    }, [selectedIndex]);

    return (
        <div className={`flex flex-col [&>*:nth-child(2)]:flex-1 w-full h-full ${className || ""}`} {...p}>
            <div className={"flex px-[8px] w-full border-b-[1px] border-b-default"}>
                {
                    label.map((e, i) => (
                        <div
                            key={i}
                            onClick={ () => tabOnClickHandler(i) }
                            className={`flex justify-center items-center box-border h-[40px] p-[0px_12px] cursor-pointer text-sm rounded-[4px_4px_0_0] border-b-[2px] select-none hover:bg-layer1 hover:text-default ${(selectedIndex === i) ? 'font-bold border-b-emphasis text-default' : 'font-normal border-b-transparent text-noimportance'}`}
                        >{ e }</div>
                    ))
                }
            </div>
            <div ref={tabItemsRef} className={`[&>*:not(*.selected)]:hidden`}>{ children }</div>
        </div>
    );
}