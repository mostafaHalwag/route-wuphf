import axios from "axios";

const token = localStorage.getItem('token');

async function getPosts() {
    const {data} = await axios.get("https://linked-posts.routemisr.com/posts",{
        headers:{
            token
        }
    })
    console.log(data)
    return data;
}

export default getPosts;