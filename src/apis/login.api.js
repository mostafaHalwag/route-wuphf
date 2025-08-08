import axios from "axios";


async function login(userInfo){
    const {data} =await axios.post("https://linked-posts.routemisr.com/users/signin", userInfo)
    return data;
}

export default login;