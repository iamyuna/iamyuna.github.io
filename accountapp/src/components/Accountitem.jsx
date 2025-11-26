import { Link } from "react-router";
import { useAccountStore } from "../store/useAccountStore";

export default function AccountItem({item}){
    const deleteAccount = useAccountStore((state) => state.deleteAccount);

    return(
        <li className="flex justify-between items-center p-[13px_10px] border-[#f0f0f0] border-b-[1px]">
            <div className="flex items-center">
                <button 
                    onClick={() => deleteAccount(item.id)} 
                    className="w-[22px] h-[22px] text-red-500 bg-[#ff7575] bg-[url('/i-delete.png')] bg-no-repeat bg-center bg-[length:10px] rounded-full mr-[3px]"
                ></button>
                <Link to={`/edit/${item.id}`} className="inline-block w-[22px] h-[22px] bg-[#d9d9d9] bg-[url('/i-edit.png')] bg-no-repeat bg-center bg-[length:11px] rounded-full mr-[5px]"></Link>
                <strong className="text-[0.95rem] font-medium">{item.memo}</strong>
                <span className="text-[0.8rem] text-[#a9a9a9] ml-[5px]">{item.etc}</span>
            </div>
            <p className="text-[0.9rem]">{Number(item.amount).toLocaleString()}원</p>
        </li>
    );
}