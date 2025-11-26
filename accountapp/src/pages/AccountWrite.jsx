import { useNavigate } from "react-router";
import AccountForm from "../components/AccountForm";
import { useAccountStore } from "../store/useAccountStore";

export default function AccountWrite(){
    const addAccount = useAccountStore((state) => state.addAccount);
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        addAccount({
            ...data,
            id: crypto.randomUUID(),
        });
        navigate("/");
    };


    return(
        <div>
            <h1 className="text-[1.3rem] text-center text-[#B0A5FF] py-[50px]">오늘의 소비</h1>
            <AccountForm onSubmit={handleSubmit}/>
        </div>
    );
}