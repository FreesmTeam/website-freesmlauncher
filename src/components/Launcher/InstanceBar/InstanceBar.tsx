import {useLauncherBarsStore} from "@/utils/stores";
import {LauncherBarType} from "@/types/LauncherBar.type";
import Image from "next/image";
import grassSvg from '../../../../public/grass.svg';

export default function InstanceBar() {
    const launcherBarsStore = useLauncherBarsStore((state) => state);
    const instanceBar = launcherBarsStore.entries.find((entry: LauncherBarType) => entry.name === 'launcher.instance-toolbar');
    const lastIndex = launcherBarsStore.entries.length - 1;
    const hasLockBars = launcherBarsStore.entries[lastIndex].opened;

    return (
        <div className="w-full min-h-40 items-stretch flex flex-nowrap gap-0 bg-white">
            {
                instanceBar?.opened && (
                    <div className="p-2.5 flex flex-col gap-2 w-[168px] bg-[#0a0a10]">
                        {
                            !hasLockBars && (
                                <div className="cursor-move rounded-full h-[5px] w-full bg-[#dbcafe]" />
                            )
                        }
                        <div className="flex justify-center items-center rounded-md hover:bg-[#1b1825]">
                            <Image width={80} src={grassSvg} alt="Grass svg icon" />
                        </div>
                        <div className="flex justify-center items-center rounded-md hover:bg-[#1b1825]">
                            <p className="text-[13px] text-[#CDD6F4]">
                                1.21
                            </p>
                        </div>

                    </div>
                )
            }
            <div className="w-full bg-[#0c0c13]"></div>
        </div>
    );
}