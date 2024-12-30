import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Freesm Launcher",
    description: "Prism Launcher fork aimed to provide a free way to play Minecraft.",
};

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ru' }]
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    return (
        <html lang={(await params).lang}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NextTopLoader
                    shadow={false}
                    showSpinner={false}
                    color="#cba6f7"
                />
                <Header />
                {children}
            </body>
        </html>
    );
}
