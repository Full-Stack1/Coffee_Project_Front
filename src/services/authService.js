import API from "./api";
const Loginuser= async(data)=>
{
     console.log("user detail",data);
    const res= await API.post("users/login",data);
    return res.data;
}
const registeruser= async(data)=>
{
    const res= await API.post("users/register",data)
    return res.data;
}
/* all api the user or any schema api  */
export {Loginuser,registeruser};
