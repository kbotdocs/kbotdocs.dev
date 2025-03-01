"use client";

import React from "react";
import Icon from "@/components/common/Icon";

interface IKeycap {
    keyText: string;
}

type Key = string | React.ReactNode;

export default function Keycap({ keyText } : IKeycap): Key {
    const getKey = (key: string) => {
        switch (key.toLowerCase()) {
            case "windows":
                return (<Icon icon={"WindowsIcon"} className={"block w-[.875em] h-[.875em] my-[calc(.875em/2)] fill-[theme(textColor.default)]"} />);
            case "command":
                return "\u2318";
            case "option":
                return "\u2325";
            case "mshift":
                return "\u21e7";
            case "won":
                return "\u20a9";
            case "arrowleft":
                return "\u2190";
            case "arrowup":
                return "\u2191";
            case "arrowright":
                return "\u2192";
            case "arrowdown":
                return "\u2193";
            case "capslock":
                return "Caps Lock";
            case "numlock":
                return "Num Lock";
            case "pgup":
                return "PgUp";
            case "pgdn":
                return "PgDn";
            case "backspace":
                return "Backspace";
            case "prtsc":
                return "PrtSc";
            default:
                return key[0].toUpperCase() + key.substring(1);
        }
    };

    return (
        <kbd className={"inline-flex items-center gap-[8px] align-middle p-[0px_6px] text-[.875em] font-sans font-semibold text-default rounded-md border border-layer1 bg-default"}>
            {getKey(keyText)}
        </kbd>
    );
}