"use client"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar=()=>{
    
    const router=useRouter();
    const currentPath=usePathname();

    const [active,setActive]=useState(currentPath);

    const handleHome=()=>{
        router.push("/");
        setActive("/");
    }

    const handleAddListing=()=>{
        router.push("/editListing");
        setActive("/editListing");
    }

    return(
        <div className="flex w-full gap-5 py-4 pl-8 fixed z-20 items-center bg-pink-100 shadow-md shadow-pink-200">
            <div onClick={handleHome} className="text-2xl cursor-pointer font-bold text-pink-600">AirPnB</div>
            <ul className="flex pl-6 gap-5 font-semibold ">
                <li onClick={handleHome} className={`cursor-pointer hover:text-[#ff4f95] ${active!=="/"?"text-black":"text-[#ff4f95]"}`}>Home</li>
                <li onClick={handleAddListing} className={`cursor-pointer hover:text-[#ff4f95] ${active!=="/editListing"?"text-black":"text-[#ff4f95]"}`}>Add new Listing</li>
            </ul>
        </div>
    );
}

export default Navbar;