import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import {headers} from "next/headers";
import {UAParser} from "ua-parser-js";
import getPlatformName from "@/utils/Helpers/getPlatformName";

export default async function Home() {
    const headersList = await headers();
    const { os } = UAParser(headersList.get("user-agent") ?? undefined);
    const platform = getPlatformName(os?.name?.toLowerCase() ?? "");

    return (
        <div className="text-white">
            <Hero platform={platform} />
            <Features />
        </div>
    );
}
