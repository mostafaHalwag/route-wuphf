import axios from "axios";

const token = localStorage.getItem('token');

async function getUserPosts(userId) {
    const {data} = await axios.get(`https://linked-posts.routemisr.com/users/${userId}/posts`,{
        headers:{
            token
        }
    })
    return data;
}

export default getUserPosts;