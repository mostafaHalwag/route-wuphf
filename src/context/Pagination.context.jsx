import {createContext, useState} from "react";

export const pagination = createContext('')

export default function PaginationContextProvider({children}) {
    const [cPage, setCPage] = useState(1)
    const [nPage, setNPage] = useState(2)
    const [pPage, setPPage] = useState(0)
    const [pages, setPages] = useState(0)
    const [paginationInfo, setPaginationInfo] = useState(null);




    return <pagination.Provider
        value={{cPage, nPage, pPage,setCPage, setNPage, setPPage,setPaginationInfo, setPages, pages}}>
        {children}
    </pagination.Provider>

}
