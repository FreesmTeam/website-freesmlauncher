export default function NewsBar() {
    return (
        <div className="p-2.5 flex justify-stretch h-10 w-full bg-[#09090e]">
            <div className="cursor-move w-[5px] rounded-full bg-[#dbcafe]"/>
            <div className="w-full text-nowrap text-[13px] text-[#cdd6f4]">
                Next.js is awesome
            </div>
            <div className="w-fit text-nowrap text-[13px] text-[#cdd6f4]">
                Все новости
            </div>
        </div>
    );
}