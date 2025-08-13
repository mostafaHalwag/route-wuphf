import React, {useContext, useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createPost} from "../apis/createPost.api.js";
import {pagination} from "../context/Pagination.context.jsx";

function AddPost() {
    const {cPage} = useContext(pagination)
    let queryClient = useQueryClient();
    const {data, isError, isLoading, error, mutate, isSuccess} = useMutation({mutationFn: createPost
        , onSuccess: () => queryClient.invalidateQueries({queryKey: ['posts', cPage]})
    })
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [imgSrc, setImgSrc] = useState('');

    function handleChange(e) {
        if (e.target.type === 'file') {
            const file = e.target.files[0];
            if (file) {
                setImage(file);
                setImgSrc(URL.createObjectURL(file));
            }
        } else {
            setBody(e.target.value);
        }
    }

    function handlePostSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (image) {
            formData.append('image', image);
        }
        if (body) {
            formData.append('body', body);
        }
        mutate(formData)
        console.log(data)
    }

    function removeImg() {
        setImage('')
        setImgSrc('')
    }

    return (
        <div>
            <form onSubmit={handlePostSubmit}>
                <div
                    className="w-9/12 max-w-2xl mx-auto my-4 border rounded-lg bg-base-100 border-base-200 dark:bg-dark-base-100 dark:border-dark-base-200">
                    <div className="px-4 py-2 bg-base-200 dark:bg-dark-base-200 rounded-t-lg">
                        <label htmlFor="post" className="sr-only">Your post</label>
                        <textarea
                            onChange={(e) => setBody(e.target.value)}
                            id="post"
                            rows="4"
                            className="w-full px-0 text-sm bg-transparent border-0 text-base-content placeholder-base-content  dark:text-dark-base-content dark:placeholder-dark-base-content dark:bg-transparent focus-visible:ring-0  "
                            placeholder="Write a post..."
                            required
                        ></textarea>
                    </div>
                    <div
                        className="flex items-center justify-between px-3 py-2 border-t border-base-200 dark:border-dark-base-200">
                        <button
                            type="submit"
                            className="hover:cursor-pointer inline-flex items-center py-2.5 px-4 text-xs font-medium text-base-100 bg-accent rounded-lg focus:ring-4 focus:ring-accent-content dark:focus:ring-dark-accent-content hover:bg-accent-focus dark:bg-dark-accent dark:hover:bg-dark-accent-focus dark:text-dark-base-100">
                            {(isLoading) ?

                                <div role="status">
                                    <svg aria-hidden="true"
                                         className="w-8 h-8 text-accent-content dark:text-dark-accent-content animate-spin  fill-base-content dark:fill-dark-base-content"
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

                                : <>Post</>}
                        </button>
                        <div className="flex ps-0 space-x-reverse rtl:space-x-reverse sm:ps-2">

                            <label
                                htmlFor="image"
                                className="inline-flex justify-center items-center p-2 text-base-content rounded-sm cursor-pointer hover:text-base-content hover:bg-base-200 dark:text-dark-base-content dark:hover:text-dark-base-content dark:hover:bg-dark-base-200">
                                <input type="file" id="image" onChange={handleChange} className="hidden"/>
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 20 18">
                                    <path
                                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                </svg>
                                <span className="sr-only">Upload image</span>
                            </label>
                            {imgSrc && (
                                <div className="relative size-16 mx-4 mb-4">
                                    <img src={imgSrc} alt="Preview" className="w-full h-full object-cover rounded-lg"/>
                                    <button
                                        onClick={removeImg}
                                        type="button"
                                        className="hover:cursor-pointer absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>)
}

export default AddPost;