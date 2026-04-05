import API from "./api";
// all category
const getallcategory= async()=>
{
    const res= await API.get("category/all",data)
    return res.data;
}
// create category  
const createcategory= async(data)=>
{
    const res= await API.post("category/create",data)
    return res.data;
}
//update category
const updatecategory= async(data)=>
{
    const res= await API.post("category/update/:Categoryid",data)
    return res.data;
}
//delete Category
const hidecategory= async(data)=>
{
    const res= await API.delete("category/hide/:Categoryid",data)
    return res.data;
}