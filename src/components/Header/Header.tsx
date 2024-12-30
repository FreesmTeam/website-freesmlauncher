import Image from "next/image";
import freesmLogo from '../../../public/freesm-launcher-logo.webp';

export default function Header() {
    return (
        <header className="p-4 mx-auto max-w-[1280px] w-full">
            <div className="flex justify-between items-center h-12 w-full">
                <Image height={48} src={freesmLogo} alt="FreesmLauncher logo" />
                <div className="flex gap-4">
                    <a
                        className="text-white py-1 px-2 rounded-md transition hover:bg-purple-950"
                        href="/"
                    >
                        Download
                    </a>
                    <a
                        className="text-white py-1 px-2 rounded-md transition hover:bg-purple-950"
                        href="/"
                    >
                        About
                    </a>
                    <div className="w-[1px] bg-slate-800" />
                </div>
            </div>
        </header>
    );
}