import { useNavigate, useParams } from "react-router";
import { useAccountStore } from "../store/useAccountStore";
import AccountForm from "../components/AccountForm";

export default function AccountEdit(){
    const accounts = useAccountStore((state) => state.accounts);
    const updateAccount = useAccountStore((state) => state.updateAccount);
    const navigate = useNavigate();
    const {id} = useParams();

    const target = accounts.find(item => item.id === id);

    const handleSubmit = (data) => {
        updateAccount(data);
        navigate("/");
    };

    return(
        <div>
            <h1 className="text-[1.3rem] text-center text-[#B0A5FF] py-[50px]">오늘의 소비</h1>
            <AccountForm initialData={target} onSubmit={handleSubmit}/>
        </div>
    );
}