import React, {useContext,} from 'react';
import {pagination} from "../context/Pagination.context.jsx";
import {useQueryClient} from "@tanstack/react-query";


function Pagination({data}) {

    const queryClient = useQueryClient()

    const {setCPage, nPage, pPage, cPage, pages} = useContext(pagination)

    function handleNext(){
        if(pages !== cPage){
            setCPage(nPage)
            queryClient.invalidateQueries({queryKey: ['posts', cPage]})
        }
    }
    function handlePrev(){
        if(cPage !== 1){
            setCPage(pPage)
            queryClient.invalidateQueries({queryKey: ['posts', cPage]})
        }
    }


    return (
        <div className="flex flex-col items-center">
            <span className="text-sm text-base-content dark:text-dark-base-content">
      Showing page <span className="font-semibold text-base-content dark:text-dark-base-content">{cPage}</span> of <span
                className="font-semibold text-base-content dark:text-dark-base-content">{pages}</span> pages
  </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button
                    onClick={handlePrev}
                    className="cursor-pointer flex items-center justify-center px-4 h-10 text-base font-medium text-base-content bg-base-200 rounded-s hover:bg-base-300 dark:bg-dark-base-200 dark:text-dark-base-content dark:hover:bg-dark-base-300">
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="cursor-pointer flex items-center justify-center px-4 h-10 text-base font-medium text-base-content bg-base-200 border-0 border-s border-base-300 rounded-e hover:bg-base-300 dark:bg-dark-base-200 dark:border-dark-base-300 dark:text-dark-base-content dark:hover:bg-dark-base-300">
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;