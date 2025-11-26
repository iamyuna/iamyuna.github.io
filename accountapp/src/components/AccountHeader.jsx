import { Link } from "react-router";
import { useAccountStore } from "../store/useAccountStore";

export default function AccountHeader(){
    const totalCount = useAccountStore((state) => state.totalCount());
    const totalAmount = useAccountStore((state) => state.totalAmount());

    return(
        <div>
            <h1 className="relative text-[1.3rem] text-center text-[#B0A5FF] pt-[50px] pb-[25px]">MY WALLET</h1>
            <Link 
                to="/write" 
                className="absolute top-[45px] right-[20px] w-[40px] h-[40px] bg-[#B0A5FF] bg-[url('/i-add.png')] bg-no-repeat bg-center bg-[length:18px] rounded-full text-blue-500"
            ></Link>
            <div className="flex justify-between bg-[#B0A5FF] p-[15px_20px]">
                <h3 className="text-[1.2rem] text-white">나의 소비 기록</h3>
                <ul className="flex">
                    <li className="text-white">
                        <p className="text-[1rem]">소비건수</p>
                        <strong className="text-[2rem] font-medium">{totalCount}</strong>
                    </li>
                    <li className="text-white ml-[20px]">
                        <p className="text-[1rem]">소비금액</p>
                        <strong className="text-[2rem] font-medium">{totalAmount}</strong>
                    </li>
                </ul>
            </div>
        </div>
    );
}