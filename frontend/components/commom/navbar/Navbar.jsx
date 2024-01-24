// "use client"
// import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const Navbar=()=>{
    
//     const router=useRouter();
//     const currentPath=usePathname();

//     const [active,setActive]=useState(currentPath);

//     const handleHome=()=>{
//         router.push("/");
//         setActive("/");
//     }

//     const handleAddListing=()=>{
//         router.push("/editListing");
//         setActive("/editListing");
//     }

//     return(
//         <div className="flex w-full gap-5 py-4 pl-8 fixed z-20 items-center bg-pink-100 shadow-md shadow-pink-200">
//             <div onClick={handleHome} className="text-2xl cursor-pointer font-bold text-pink-600">AirPnB</div>
//             <ul className="flex pl-6 gap-5 font-semibold ">
//                 <li onClick={handleHome} className={`cursor-pointer hover:text-[#ff4f95] ${active!=="/"?"text-black":"text-[#ff4f95]"}`}>Home</li>
//                 <li onClick={handleAddListing} className={`cursor-pointer hover:text-[#ff4f95] ${active!=="/editListing"?"text-black":"text-[#ff4f95]"}`}>Add new Listing</li>
//             </ul>
//         </div>
//     );
// }

// export default Navbar;

"use client"
import logo from "../../../assets/images/flinstaLogo.png";
import Image from "next/image";
import hamburgerMenu from "../../../assets/images/Group 9.png";
import pict from "../../../assets/images/Group 85.png";
import ar from "../../../assets/images/Group 86.png";
import profilePic from "../../../assets/images/Group.png";
import bellicon  from "../../../assets/images/Vector (1).png";
import browser from "../../../assets/images/Vector.png";

const Navbar=()=>{

    return(
        <div className="w-full fixed flex py-2 z-10  bg-[#C50042] items-center justify-between px-14">
            <div className="h-[68px]">
                <Image className="w-full object-cover h-full" src={logo}></Image>
            </div>
            <ul className="flex items-center gap-4">
                <li className="text-lg font-medium text-white">Hello, Guest</li>
                <li className="h-6 "><Image className="w-full h-full"  src={bellicon}></Image></li>
                <div className="flex hover:bg-gray-300 cursor-pointer  ml-1 items-center bg-white p-1 gap-1 pl-2 border rounded-full">
                    <li className="h-5 w-6"><Image className="w-full h-full object-cover" src={hamburgerMenu}></Image></li>
                    <li className="h-9"><Image className="w-full h-full object-cover"  src={profilePic}></Image></li>
                </div>
            </ul>
        </div>
    );
}

export default Navbar;