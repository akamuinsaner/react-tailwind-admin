export const getLocalStorage = (key: string) => {
    try {
        return window.localStorage.getItem(key);
    } catch (e) {
        return null;
    }
};

export const setLocalStorage = (key: string, value: any) =>
    window.localStorage.setItem(key, value);

// export const getItemLocalStorage = (key: string, itemKey: string) => {
//     const targetStorge = getLocalStorage(key);
//     if (targetStorge && itemKey in targetStorge) {
//         return targetStorge[itemKey];
//     }
//     return null;
// };

// export const setItemLocalStorage = (
//     key: string,
//     itemKey: string,
//     value: any,
// ) => {
//     const targetStorge = getLocalStorage(key) || {};
//     targetStorge[itemKey] = value;
//     setLocalStorage(key, targetStorge);
// };

// export const delItemLocalStorage = (key: string, itemKey: string) => {
//     const targetStorge = getLocalStorage(key);
//     if (targetStorge && itemKey in targetStorge) {
//         targetStorge[itemKey] = null;
//         setLocalStorage(key, targetStorge);
//     }
// };

export const delLocalStorage = (key: string) =>
    window.localStorage.removeItem(key);

export const clearLocalStorage = () => window.localStorage.clear();

// ------------------------------------------------------
export const getSessionStorage = (key: string) =>
    JSON.parse(window.sessionStorage.getItem(key));

export const setSessionStorage = (key: string, value: unknown) =>
    window.sessionStorage.setItem(key, JSON.stringify(value));

export const getItemSessionStorage = (key: string, itemKey: string) => {
    const targetStorge = getSessionStorage(key);
    if (targetStorge && itemKey in targetStorge) {
        return targetStorge[itemKey];
    }
    return null;
};

export const setItemSessionStorage = (
    key: string,
    itemKey: string,
    value: any,
) => {
    const targetStorge = getSessionStorage(key) || {};
    targetStorge[itemKey] = value;
    setSessionStorage(key, targetStorge);
};

export const delItemSessionStorage = (key: string, itemKey: string) => {
    const targetStorge = getSessionStorage(key);
    if (targetStorge && itemKey in targetStorge) {
        targetStorge[itemKey] = null;
        setSessionStorage(key, targetStorge);
    }
};

export const delSessionStorage = (key: string) =>
    window.sessionStorage.removeItem(key);

export const clearSessionStorage = () => window.sessionStorage.clear();
