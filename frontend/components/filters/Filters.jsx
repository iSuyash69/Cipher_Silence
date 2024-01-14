"use client"
import Image from "next/image";
import comb from "../../assets/images/comb.png";
import { useEffect, useState } from "react";

const Filters=()=>{

    const [isScrolled,setIsScrolled]=useState(false);

    useEffect(()=>{
        const handleScroll=()=>{
            const scrolled=window.scrollY>30;
            setIsScrolled(scrolled);
        };
        window.addEventListener('scroll',handleScroll);
    },[]);

    return(
        <div className={`flex flex-col items-center  transition-all duration-300 pt-20 shadow-md shadow-gray-500 bg-[#C50042] ${isScrolled ? 'pt-[0px]':''}`}>
            <div className={`flex bg-white rounded-full gap-1 mt-2 p-1 transition-all duration-300  ease-in-out ${isScrolled ? 'opacity-0':''} `}>
                <div className="hover:bg-gray-300 cursor-pointer text-gray-400 rounded-full p-2 px-4 hover:text-[#C50042]">Salon</div>
                <span style={{width:'1px',height:'25px',alignSelf:'center'}} className="bg-gray-400"></span>
                <div className="hover:bg-gray-300  cursor-pointer text-gray-400  rounded-full p-2 px-3 hover:text-[#C50042] ">Spa</div>
            </div>
            <div className={`flex pt-7 gap-6 bg-[#C50042] pb-5 ${isScrolled ?'':''}`}>
                <div>
                    <div className="bg-white rounded-full flex hover:bg-gray-300 cursor-pointer items-center justify-center w-16 h-16">
                        <Image className="w-9" src={comb}></Image>
                    </div>
                    <h1 className="text-white">Haircare</h1>
                </div>
                <div>
                    <div className="bg-white rounded-full flex hover:bg-gray-300 cursor-pointer items-center justify-center w-16 h-16">
                        <Image className="w-9" src={comb}></Image>
                    </div>
                    <h1 className="text-white">Haircare</h1>
                </div>
                <div>
                    <div className="bg-white rounded-full flex hover:bg-gray-300 cursor-pointer items-center justify-center w-16 h-16">
                        <Image className="w-9" src={comb}></Image>
                    </div>
                    <h1 className="text-white">Haircare</h1>
                </div>
                <div>
                    <div className="bg-white rounded-full flex hover:bg-gray-300 cursor-pointer items-center justify-center w-16 h-16">
                        <Image className="w-9" src={comb}></Image>
                    </div>
                    <h1 className="text-white">Haircare</h1>
                </div>
                <div>
                    <div className="bg-white rounded-full flex hover:bg-gray-300  cursor-pointer items-center justify-center w-16 h-16">
                        <Image className="w-9" src={comb}></Image>
                    </div>
                    <h1 className="text-white">Haircare</h1>
                </div>
                <div>
                    <div className="bg-white rounded-full flex hover:bg-gray-300 cursor-pointer items-center justify-center w-16 h-16">
                        <Image className="w-9" src={comb}></Image>
                    </div>
                    <h1 className="text-white">Haircare</h1>
                </div>
                <div>
                    <div className="bg-white rounded-full flex hover:bg-gray-300 cursor-pointer items-center justify-center w-16 h-16">
                        <Image className="w-9" src={comb}></Image>
                    </div>
                    <h1 className="text-white">Haircare</h1>
                </div>
                <div>
                    <div className="bg-white rounded-full flex hover:bg-gray-300 cursor-pointer items-center justify-center w-16 h-16">
                        <Image className="w-9" src={comb}></Image>
                    </div>
                    <h1 className="text-white">Haircare</h1>
                </div>
                <div>
                    <div className="bg-white rounded-full flex hover:bg-gray-300 cursor-pointer items-center justify-center w-16 h-16">
                        <Image className="w-9" src={comb}></Image>
                    </div>
                    <h1 className="text-white">Haircare</h1>
                </div>
                <div>
                    <div className="bg-white rounded-full flex hover:bg-gray-300 cursor-pointer items-center justify-center w-16 h-16">
                        <Image className="w-9" src={comb}></Image>
                    </div>
                    <h1 className="text-white">Haircare</h1>
                </div>
                <div>
                    <div className="bg-white rounded-full flex items-center cursor-pointer hover:bg-gray-300 justify-center w-16 h-16">
                        <Image className="w-9" src={comb}></Image>
                    </div>
                    <h1 className="text-white">Haircare</h1>
                </div>
            </div>
        </div>
    );
};

export default Filters;