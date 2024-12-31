import Launcher from "@/components/Launcher/Launcher";

export default function Hero() {
    const platform = navigator.platform.toLowerCase();

    return (
        <div className="flex flex-col max-w-[960px] mx-auto">
            <p className="text-center text-balance text-6xl text-white">
                Download Freesm Launcher for {platform}
            </p>
            <Launcher />
        </div>
    )
}