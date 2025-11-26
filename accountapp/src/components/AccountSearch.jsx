export default function AccountSearch({keyword, setKeyword}){

    return(
        <input 
            type="text" 
            placeholder="검색어를 입력하세요."
            value={keyword} 
            onChange={e => setKeyword(e.target.value)} 
            className="w-[calc(100%-75px)] bg-[#f4f2ff] p-[6px_10px] border-[#f4f2ff] border-[2px] rounded-[5px] outline-none focus:border-[#B0A5FF]"
        />
    );
}