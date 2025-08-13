import React, {createContext, useEffect} from "react";
import getUserData from "../apis/userData.api.js";

export const auth = createContext('');

export default function TokenContextProvider({children}) {
    const [token, setToken] = React.useState(null);
    const [userData, setUserData] = React.useState(null);


    async function setUserDataFn(){
        const res = await getUserData()
        setUserData(res.user)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setToken(token)
            setUserDataFn()
        }
    }, [])

    return <auth.Provider value={{token, setToken, userData}}>
        {children}
    </auth.Provider>
}