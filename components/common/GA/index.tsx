import Script from "next/script";
import React from "react";

const script = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${process.env.GA_ID}');
`;

export default function GA() {
    return (
        process.env.GA_ID &&
        <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}/>
            <Script id={"google-analytics"} dangerouslySetInnerHTML={{ __html: script }}/>
        </>
    );
}