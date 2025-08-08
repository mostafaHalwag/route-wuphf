import React from 'react';
import {Link} from "react-router-dom";

function PostCard({post}) {

    const {body, _id, image, user: {name, photo}, createdAt} = post

    return (<div
            className="w-9/12 max-w-2xl mx-auto bg-base-100 border border-base-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-dark-base-100 dark:border-dark-base-200 my-8">
            <div className="px-5 py-6">
                <div className="flex items-center">
                    <div className="shrink-0">
                        <img className="w-10 h-10 rounded-full" src={photo}
                             alt="user image"/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-base-content truncate dark:text-dark-base-content">
                            {name}
                        </p>
                        <p className="text-sm text-base-content/50 truncate dark:text-dark-base-content/50">
                            created at {createdAt.split('T')[0]} {createdAt.split('T')[1].split('.')[0]}
                        </p>
                    </div>
                </div>
            </div>
            {image && (<Link to={`/post/${_id}`}>
                <div className="px-5"><img
                    className="w-full object-cover object-center border border-base-200 dark:border-dark-base-200"
                    src={image} alt=""/>
                </div>
            </Link>)}
            <div className="p-6">
                <p className="mb-4 text-sm text-base-content dark:text-dark-base-content">{body}</p>
            </div>
            <div className="w-[97%] justify-evenly flex border-t border-gray-200 dark:border-dark-base-300/70">
                <div className=" rounded p-2 my-1 text-base-content/60 hover:bg-base-300 dark:text-dark-base-content/60 dark:hover:bg-dark-base-content/20 cursor-pointer">
                    <i className="fa-regular fa-thumbs-up"></i> Like
                </div>
                <Link to={`/post/${_id}`}>
                    <div
                        className=" rounded p-2 my-1 text-base-content/60 hover:bg-base-300 dark:text-dark-base-content/60 dark:hover:bg-dark-base-content/20 cursor-pointer">
                        <i className=" fa-regular fa-comment"></i> Comment
                    </div>
                </Link>
                <div className=" rounded p-2 my-1  text-base-content/60 hover:bg-base-300 dark:text-dark-base-content/60 dark:hover:bg-dark-base-content/20 cursor-pointer">
                    <i className="fa-regular fa-share-from-square"></i> Share
                </div>
            </div>
        </div>);
}

export default PostCard;