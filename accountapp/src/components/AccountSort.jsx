export default function AccountSort({sortOrder, toggleSort}){

    return(
        <button onClick={toggleSort} className="w-[70px] h-[40px] text-[0.95rem] text-white bg-[#B0A5FF] px[7px] rounded-[5px] ml-[5px]">
            {sortOrder === "newest" ? "최신순" : "오래된순"}
        </button>
    );
}