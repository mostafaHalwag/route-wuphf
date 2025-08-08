import axios from "axios";

async function registerUser(userInfo){
    const {data} = await axios.post("https://linked-posts.routemisr.com/users/signup", userInfo)
    return data;
}

export default registerUser;