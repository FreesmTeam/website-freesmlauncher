import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import NextTopLoader from "nextjs-toploader";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import {LocaleType} from "@/types/Locale.type";
import { Analytics } from "@vercel/analytics/react"

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

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string; }>;
}>) {
    const locale = (await params).locale;

    if (!routing.locales.includes(locale as LocaleType)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <NextTopLoader
                        shadow={false}
                        showSpinner={false}
                        color="#cba6f7"
                    />
                    <Header />
                    {children}
                </NextIntlClientProvider>
                <Analytics />
            </body>
        </html>
    );
}
