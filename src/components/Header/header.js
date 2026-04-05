import React from "react";
import Navbar  from "../Navbare";
import Logo from "../Logo";
import Link from "next/link";
import { Pointer, ShoppingCart, UserCircle } from "lucide-react";
//import FishCartUser from "../fish-cart-user";
const Header =()=>{
    return(
        <>
        <header className="flex justify-between m-[5px] h-[50px]  bg-brown text-white pt-[10px] ">
        <Logo/>
       
        <div className="flex gap-4 ">
         <Navbar/>
        <Link href="/cart">
    <ShoppingCart size={24} color="#C8956C" />
  </Link>
  <Link href="/User_profile">
    <UserCircle size={24} color="#C8956C" />
  </Link>
        </div>
       
        </header>
        </>
    )
}
export default Header;
/* <h1 className="">Hellow in the header تذكري اعملي نافكيت يلي هو عبارة عن رابط الصفحات تاغ تبعها nav , و \اخلها  link  </h1>
 */