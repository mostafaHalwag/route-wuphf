import axios from "axios";

const token = localStorage.getItem('token');

async function getUserData() {
    const {data} = await axios.get("https://linked-posts.routemisr.com/users/profile-data",{
        headers:{
            token
        }
    })
    return data;
}

export default getUserData;