"use client";

import {useEffect, useState} from "react";
import Keycap from "@/components/common/Keycap";

interface IKeys {
    windows: string[] | null;
    mac: string[] | null;
}

enum OS {
    Windows, Mac
}

export default function Keys({ windows, mac } : IKeys) {
    const [OSId, setOSId] = useState<OS>(OS.Windows);

    const onClick = () => {
        if (windows && mac) {
            setOSId(Number(OSId === 0));
        }
    }

    useEffect(() => {
        const ua = window.navigator.userAgent;

        if (windows && !mac) {
            setOSId(OS.Windows);
        }
        else if (!windows && mac) {
            setOSId(OS.Mac);
        }
        else if (ua.includes("Mac")) {
            setOSId(OS.Mac);
        }
        else {
            setOSId(OS.Windows);
        }
    }, []);

    return (
        <span className={`inline-flex items-center gap-[4px] align-middle ${(windows && mac) ? "cursor-pointer" : "cursor-auto"}`} onClick={onClick}>
            {
                ((OSId === OS.Windows) && windows) && windows.map((keyText, i) => (
                    <Keycap key={i} keyText={keyText}/>
                ))
            }
            {
                ((OSId === OS.Mac) && mac) && mac.map((keyText, i) => (
                    <Keycap key={i} keyText={keyText}/>
                ))
            }
        </span>
    );
}