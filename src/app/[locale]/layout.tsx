import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import NextTopLoader from "nextjs-toploader";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import {LocaleType} from "@/types/Other/Locale.type";
import { Analytics } from "@vercel/analytics/react"
import TanstackQueryProviders from "@/utils/Providers/TanstackQueryProviders";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import {APP_DESCRIPTION, APP_NAME} from "@/configs/constants";
import Footer from "@/components/Footer/Footer";
import {SpeedInsights} from "@vercel/speed-insights/next";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    category: "website",
    generator: "Next.js",
    formatDetection: {
        telephone: false,
    },
    icons: {
        icon: "/favicon.webp"
    },
    title: {
        template: `%s - ${APP_NAME}`,
        default: APP_NAME,
    },
    description: APP_DESCRIPTION,
    applicationName: APP_NAME,
    openGraph: {
        images: "/banner.webp",
        siteName: APP_NAME,
        type: "website",
        title: APP_NAME,
        description: APP_DESCRIPTION,
    },
    twitter: {
        card: "summary",
        title: APP_NAME,
        description: APP_DESCRIPTION,
    },
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
            <Head>
                <meta name="robots" content="NOODP" key="NOODP" />
            </Head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased pb-28 sm:pb-8`}>
                <TanstackQueryProviders>
                    <NextIntlClientProvider messages={messages}>
                        <NextTopLoader
                            zIndex={30000}
                            shadow={false}
                            showSpinner={false}
                            color="#cba6f7"
                        />
                        <div className="relative z-10">
                            <Header />
                            <Navbar />
                            <div className="global-overlay">
                                {children}
                            </div>
                        </div>
                        <Footer />
                        <SpeedInsights />
                    </NextIntlClientProvider>
                    <Analytics />
                </TanstackQueryProviders>
            </body>
        </html>
    );
}
