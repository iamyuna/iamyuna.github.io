export const loadStorage = (key) => {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : [];
    } catch(err) {
        console.error("localStorage load error:", err);
    }
}

export const saveStorage = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch(err) {
        console.log("localStorage save error:", err);
    }
}