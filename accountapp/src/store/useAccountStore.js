import { create } from "zustand";
import { loadStorage, saveStorage } from "../utils/storage";

const STORAGE_KEY = "account_storage";

export const useAccountStore = create((set, get) => {
    const sync = (nextState) => {
        saveStorage(STORAGE_KEY, nextState);
        set({accounts: nextState});
    };

    return {
        accounts: loadStorage(STORAGE_KEY),
        addAccount: (entry) => {
            const nextState = [...get().accounts, entry]
            sync(nextState);
            
        },
        deleteAccount: (id) => {
            const nextState = get().accounts.filter(item => item.id !== id);
            sync(nextState);

        },
        totalCount: () => get().accounts.length,
        totalAmount: () => 
            get().accounts.reduce((acc,item) => acc + Number(item.amount), 0).toLocaleString(),
        updateAccount: (updateItem) => {
            const nextState = get().accounts.map((item) => 
                item.id === updateItem.id ? updateItem : item
            );
            sync(nextState);
        },

        clearAll: () => {
            sync([]);
        },
    };
});