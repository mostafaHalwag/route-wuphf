import React, {createContext, useEffect} from "react";

export const theme = createContext('');

export default function ThemeContextProvider({children}) {
    const [mode, setMode] = React.useState('light');
    function toggleMode() {
        if(mode === 'light') {
            setMode('dark')
            localStorage.setItem('mode', 'dark')
        } else {
            setMode('light')
            localStorage.setItem('mode', 'light')
        }
        console.log(localStorage.getItem('mode') )
    }
    useEffect(() => {
        const mode = localStorage.getItem('mode')
        if (mode === 'dark') {
            setMode('dark')
        }
        else{
            setMode('light')
        }
    }, [])

    return <theme.Provider value={{mode, setMode, toggleMode}}>
        {children}
    </theme.Provider>
}