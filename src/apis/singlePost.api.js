import axios from "axios";

const token = localStorage.getItem('token')

export async function getSinglePost(id){
    const {data} = await axios.get(`https://linked-posts.routemisr.com/posts/${id}`,{
        headers:{
            token
        }
    })
    console.log(data)
    return data
}


