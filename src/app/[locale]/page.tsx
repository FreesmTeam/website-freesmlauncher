import Hero from "@/components/Hero/Hero";

export default async function Home() {
    return (
        <div>
            <Hero />
            <div className="flex gap-4 justify-between items-start mt-12 max-w-[960px] px-4 mx-auto">
                <div className="flex-1 flex flex-col gap-2">
                    <p className="text-3xl text-white font-semibold">
                        Open Source
                    </p>
                    <p className="text-xl text-gray-300">
                        Freesm Launcher is an open source fork of Prism Launcher. All launcher code is available under the GPL-3.0 license.
                    </p>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <p className="text-3xl text-white font-semibold">
                    DRM-free
                    </p>
                    <p className="text-xl text-gray-300">
                        Easily play Minecraft without any restrictions, even if you don't have an account.
                    </p>
                </div>
            </div>
        </div>
    );
}
