import DeleteInstanceModal from "@/components/Launcher/Modals/DeleteInstance/DeleteInstance";
import EaglerCraft from "@/components/Launcher/Modals/EaglerCraft/EaglerCraft";
import getPlatformName from "@/utils/Helpers/getPlatformName";

export default function Modals({
    platform,
}: {
    platform: ReturnType<typeof getPlatformName>;
}) {
    return (
        <>
            <EaglerCraft platform={platform} />
            <DeleteInstanceModal platform={platform} />
        </>
    );
}
