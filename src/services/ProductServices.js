import API from "./api";
// get all product 
const getallproduct= async()=>
{
    const res= await API.get("products/all",data)
    return res.data;
}

//fet cateroray product
const getCategoryProduct = async()=>
{
    const res= await API.get("products/CategoryProduct/:categoryId",data)
    return res.data;
}
 // create product
 const createproduct = async(data)=>
 {
    const res= await API.post("products//create",data)
    return res.data;
 }
 // update product
 const updateproduct= async (data)=>
 {
    const res= await API.put("products/update/:productId")
    return res.data;
 }
 //delete product
 const hideproduct= async()=>
 {
    const res= await API.delete("products//hide/:productid")
    return res.data;
 }
 //search product
    const searchproduct= async()=>
    {
        const res= await API.get("products//Filter-name-product",data)
        return res.data;
    }

    //page one product
    const getproductbyid= async()=>
    {
        const res= await API.get("products/product-details/:productid",data)
        return res.data;
    }