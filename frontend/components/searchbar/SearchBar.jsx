"use client"
import searchIcon from "../../assets/images/searchicon.png";
import Image from "next/image";
import { useState , useEffect } from "react";

const SearchBar=()=>{

    const [isScrolled,setIsScrolled]=useState(false);
    const [isHover1,setIsHover1]=useState(false);
    const [isHover2,setIsHover2]=useState(false);


    useEffect(()=>{
        const handleScroll=()=>{
            const scrolled=window.scrollY>30;
            setIsScrolled(scrolled);
        };
        window.addEventListener('scroll',handleScroll);
    },[]);

    return(
        <div className={`w-full pt-20 flex transition-all duration-500 ease-in-out ${isScrolled ? 'mt-0 pt-5 transition-all duration-500 ease-in-out ' : ''} justify-center h-20 bg-[#C50042]`}>
            <div className={`flex h-16 ${isScrolled ? 'h-[48px] fixed z-20 ' : ''}`}>
                <div className="flex z-10 relative bg-white rounded-full overflow-hidden ">
                    {isScrolled ? (
                        <div className="flex">
                            <input className={`hover:placeholder:text-[#C50042] w-[112px] transition-all duration-200 ease-in-out outline-none border-gray-400  placeholder:text-center h-full hover:bg-gray-200 cursor-pointer hover:rounded-full hover:border-none`} type="text" placeholder="Salon" onMouseEnter={()=>setIsHover1(true)} onMouseLeave={()=>setIsHover1(false)} readOnly></input>
                            <span className={`bg-gray-300 self-center w-[1px] h-[25px] ${isHover1 ? 'opacity-0':''}`}></span>
                            <input className={`hover:placeholder:text-[#C50042] w-[112px] transition-all duration-500 ease-in-out cursor-pointer outline-none border-gray-400 placeholder:text-center h-full hover:bg-gray-200 hover:rounded-full hover:border-none`}  type="text" placeholder="Location" onMouseEnter={()=>{setIsHover1(true);setIsHover2(true);}} onMouseLeave={()=>{setIsHover1(false);setIsHover2(false);}} readOnly></input>
                            <span className={`self-center h-[25px] w-[1px] bg-gray-300 ${isHover2 ? 'opacity-0':''}`}></span>
                            <input className={`hover:placeholder:text-[#C50042] w-[90px] transition-all duration-500 ease-in-out cursor-pointer placeholder:text-center hover:bg-gray-200 hover:rounded-full hover:border-none outline-none h-full`} type="text" placeholder="Filter"  onMouseEnter={()=>setIsHover2(true)} onMouseLeave={()=>setIsHover2(false)} readOnly></input>
                            <div  className={`cursor-pointer flex items-center w-14 transition-all duration-500 ease-in-out rounded-l-full shadow hover:bg-gray-200 shadow-gray-400 justify-center bg-white `}>
                                <Image className={`w-8 transition-all duration-500 ease-in-out`} src={searchIcon}></Image>
                            </div>
                        </div>
                    ):(
                        <div className="flex">
                            <input className={`w-96 hover:placeholder:text-[#C50042] transition-all duration-200 ease-in-out outline-none border-gray-400 px-10 placeholder:text-left h-full hover:bg-gray-200 hover:rounded-full hover:border-none`} type="text" placeholder="Name of the salon" onMouseEnter={()=>setIsHover1(true)} onMouseLeave={()=>setIsHover1(false)} ></input>
                            <span className={`self-center w-[1px] h-[35px] bg-gray-300 ${isHover1 ? 'opacity-0':''}`}></span>
                            <input className={`w-32 hover:placeholder:text-[#C50042]  cursor-pointer outline-none border-gray-400 placeholder:text-center h-full hover:bg-gray-200 hover:rounded-full hover:border-none`}  type="text" placeholder="Location" onMouseEnter={()=>{setIsHover1(true);setIsHover2(true);}} onMouseLeave={()=>{setIsHover1(false);setIsHover2(false);}} readOnly></input>
                            <span className={`self-center h-[35px] w-[1px] bg-gray-300 ${isHover2 ? 'opacity-0':''}`}></span>
                            <input className={`w-28 hover:placeholder:text-[#C50042] cursor-pointer placeholder:text-center hover:bg-gray-200 hover:rounded-full hover:border-none outline-none h-full`} type="text" placeholder="Add Filter" onMouseEnter={()=>setIsHover2(true)} onMouseLeave={()=>setIsHover2(false)}  readOnly></input>
                            <div  className={`w-24 cursor-pointer flex items-center rounded-l-full shadow hover:bg-gray-200 shadow-gray-400 justify-center bg-white `}>
                                <Image className={`w-11 `} src={searchIcon}></Image>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    ); 
}

export default SearchBar;