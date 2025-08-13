import React, {useContext} from 'react';
import {useQuery} from "@tanstack/react-query";
import getPosts from "../apis/posts.api.js";
import PostCard from "../components/PostCard.jsx";
import AddPost from "../components/AddPost.jsx";
import Pagination from "../components/Pagination.jsx";
import {pagination} from "../context/Pagination.context.jsx";

function Home() {
    const {cPage,setCPage, setNPage, setPPage, setPages} = useContext(pagination)
    const {isLoading, isError, data, error} = useQuery({queryKey: ['posts', cPage], queryFn: ()=>getPosts(cPage)});
    const paginationInfo = data?.paginationInfo
    if(paginationInfo){
        const {currentPage, prevPage, nextPage, numberOfPages} = paginationInfo
        setCPage(currentPage)
        setPPage(prevPage)
        setNPage(nextPage)
        setPages(numberOfPages)
    }
    console.log(cPage)
    if (isLoading) {
        return (
            <div className="text-center">
                <div role="status">
                    <svg aria-hidden="true"
                         className="inline w-20 h-20 text-accent-content dark:text-dark-accent-content animate-spin  fill-base-content dark:fill-dark-base-content"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>)
    }

    if (isError) {
        return (<>
            <div
                className="flex items-center p-4 mb-4 text-sm text-error-content border border-red-300 rounded-lg bg-error dark:bg-dark-error dark:text-dark-error-content dark:border-red-800"
                role="alert">
                <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">{error?.message}</span>
                </div>
            </div>
        </>)
    }
    return (
        <div className="relative max-w-screen">
            <AddPost/>
            {data.posts.map((post) => <PostCard key={post._id} post={post}></PostCard>)}
            <Pagination data={data}/>
        </div>
    )
}

export default Home;