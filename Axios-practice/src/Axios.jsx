import axios from "axios";
const instance=axios.create({
    baseURL:"https://axiosproject-42acd-default-rtdb.asia-southeast1.firebasedatabase.app/",
    
    //baseURL:"https://dummyjson.com",
})
export default instance;