import type { Metadata } from "next";
import React from "react";
import ThemeProvider from "@/components/context/ThemeProvider";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/common/Header";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://kbotdocs.dev"),
    title: "KBotDocs",
    description: "카카오톡봇의 정보가 모인 카카오톡봇 문서입니다.",
    openGraph: {
        title: {
            default: "KBotDocs",
            template: "%s | KBotDocs"
        },
        siteName: "KBotDocs",
        url: "https://kbotdocs.dev/",
        images: {
            url: "/metadata/ogimage.png"
        },
        type: "website",
        locale: "ko-KR"
    },
    icons: [
        {
            rel: "icon",
            type: "image/x-icon",
            url: "/metadata/favicon_light.ico",
            media: '(prefers-color-scheme: light)',
        },
        {
            rel: "icon",
            type: "image/x-icon",
            url: "/metadata/favicon_dark.ico",
            media: '(prefers-color-scheme: dark)',
        }
    ]
};

const open_sans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["italic", "normal"],
    variable: "--font-open-sans"
});

const pretendard = localFont({
    src: "../public/fonts/PretendardVariable.woff2",
    variable: "--font-pretendard"
});

const cascadia_code_nf = localFont({
    src: [
        {
            path: "../public/fonts/CascadiaCodeNF.woff2",
            style: "normal"
        },
        {
            path: "../public/fonts/CascadiaCodeNFItalic.woff2",
            style: "italic"
        }
    ],
    variable: "--font-cascadia-code-nf"
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html suppressHydrationWarning>
            <body className={`${open_sans.variable} ${pretendard.variable} ${cascadia_code_nf.variable}`}>
                <ThemeProvider>
                    <Header />
                    { children }
                </ThemeProvider>
            </body>
        </html>
    );
}
