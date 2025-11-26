import { Link } from "react-router";
import { useAccountStore } from "../store/useAccountStore";
import { useEffect, useState } from "react";

export default function AccountForm({initialData, onSubmit}){
    const [form, setForm] = useState({
        date: new Date().toISOString().slice(0, 10),
        amount: "",
        memo: "",
        etc: "",
    });

    useEffect(() => {
        if(initialData){
            setForm(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return(
        <form onSubmit={handleSubmit} className="px-[20px] pb-[20px]">
            <div className="flex items-end">
                <label className="block w-[100px] text-[1.1rem] text-[#656565] pb-[10px]">날짜</label>
                <input 
                    type="date" 
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-[calc(100%-100px)] border-[#dddddd] border-b-[1px] py-[10px] outline-none focus:border-[#B0A5FF]"
                />
            </div>
            <div className="flex items-end mt-[10px]">
                <label className="block w-[100px] text-[1.1rem] text-[#656565] pb-[10px]">금액</label>
                <input 
                    type="number" 
                    name="amount"
                    value={form.amount}
                    onChange={handleChange}
                    className="w-[calc(100%-100px)] border-[#dddddd] border-b-[1px] py-[10px] outline-none focus:border-[#B0A5FF]"
                />
            </div>
            <div className="flex items-end mt-[10px]">
                <label className="block w-[100px] text-[1.1rem] text-[#656565] pb-[10px]">내용</label>
                <input 
                    type="text" 
                    name="memo"
                    value={form.memo}
                    onChange={handleChange}
                    className="w-[calc(100%-100px)] border-[#dddddd] border-b-[1px] py-[10px] outline-none focus:border-[#B0A5FF]"
                />
            </div>
            <div className="flex items-end mt-[10px]">
                <label className="block w-[100px] text-[1.1rem] text-[#656565] pb-[10px]">비고</label>
                <input 
                    type="text" 
                    name="etc"
                    value={form.etc}
                    onChange={handleChange}
                    className="w-[calc(100%-100px)] border-[#dddddd] border-b-[1px] py-[10px] outline-none focus:border-[#B0A5FF]"
                />
            </div>
            <button type="submit" className="block w-full text-white bg-[#B0A5FF] rounded-[5px] py-[10px] mt-[110px]">저장</button>
            <Link to="/" className="block w-full text-center bg-[#dddddd] rounded-[5px] py-[10px] mt-[10px]">취소</Link>
        </form>
    );
}