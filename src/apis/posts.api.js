import axios from "axios";

const token = localStorage.getItem('token');

async function getPosts(currentPage) {
    const {data} = await axios.get(`https://linked-posts.routemisr.com/posts?limit=15&sort=-createdAt&page=${currentPage}`,{
        headers:{
            token
        }
    })
    console.log(data)

    return data;
}

export default getPosts;