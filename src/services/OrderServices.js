import API from "./api";
// all orders
const getallorder= async()=>
{
    const res= await API.get("order/all",data)
    return res.data;
}
// create order
const createorder= async(data)=>
{
    const res= await API.post("order/create",data)
    return res.data;
}
//update order
const updateorder= async(data)=>
{
    const res= await API.post("order/update/:orderId",data)
    return res.data;
}
//delete Order
const hideorder= async(data)=>
{
    const res= await API.delete("order/hide-order/:orderId",data)
    return res.data;
}
//show pre order
const listorder=(data)=>
{
    const res= API.get("/show-pre-order",data)
    return res.data;
}