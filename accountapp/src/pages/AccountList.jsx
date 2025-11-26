import { useMemo, useState } from "react";
import AccountHeader from "../components/AccountHeader";
import AccountItems from "../components/AccountItems";
import AccountSearch from "../components/AccountSearch";
import AccountSort from "../components/AccountSort";
import { useAccountStore } from "../store/useAccountStore";

export default function AccountList(){
    const accounts = useAccountStore((state) => state.accounts);
    const [keyword, setKeyword] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");

    const toggleSort = () => {
        setSortOrder(prev => prev === "newest" ? "oldest" : "newest");
    };

    const filteredAccounts = useMemo(() => {
        return accounts
            .filter((item) => 
                item.memo.toLowerCase().includes(keyword.toLowerCase())
            )
            .sort((a,b) => {
                return sortOrder === "newest"
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date)
            });
    }, [accounts, keyword, sortOrder]);

    return(
        <div>
            <AccountHeader/>
            {accounts.length === 0 ? (
                <p className="text-[#a9a9a9] text-center py-[180px]">등록된 소비가 없습니다.</p>
            ): (
                <div className="p-[20px]">
                    <AccountSearch keyword={keyword} setKeyword={setKeyword}/>
                    <AccountSort sortOrder={sortOrder} toggleSort={toggleSort}/>
                    <AccountItems accounts={filteredAccounts}/>
                </div>
            )}
        </div>
    );
}