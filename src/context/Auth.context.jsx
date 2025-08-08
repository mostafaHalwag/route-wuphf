import React, {createContext, useEffect} from "react";

export const auth = createContext('');

export default function TokenContextProvider({children}) {
    const [token, setToken] = React.useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setToken(token)
        }
    }, [])

    return <auth.Provider value={{token, setToken}}>
        {children}
    </auth.Provider>
}