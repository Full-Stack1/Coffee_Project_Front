import API from "./api";
const createuser= async(data)=>
{
    const res= await API.post("users/creates",data)
    return res.data;
}
const getprofile=async()=>
{
    const res= await API.get("users/:userId",data)
    return res.data;
}