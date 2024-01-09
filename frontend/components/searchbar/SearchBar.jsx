import searchIcon from "../../assets/images/searchicon.png";
import Image from "next/image";


const SearchBar=()=>{

    return(
        <div className="mt-20 w-full flex justify-center pr-14 h-20 bg-[#C50042]">
            <div className="flex h-16">
                <div className="flex bg-white rounded-full overflow-hidden ">
                    <input className="w-96 outline-none border-gray-400 px-10 placeholder:text-left h-full hover:bg-gray-200 hover:rounded-full hover:border-none" type="text" placeholder="Name of the salon"></input>
                    <input className="w-32 cursor-pointer border-x outline-none border-gray-400 placeholder:text-center h-full hover:bg-gray-200 hover:rounded-full hover:border-none"  type="text" placeholder="Location" readOnly></input>
                    <input className="w-28 cursor-pointer placeholder:text-center hover:bg-gray-200 hover:rounded-full hover:border-none outline-none h-full" type="text" placeholder="Add Filter" readOnly></input>
                    <div  className="w-24 cursor-pointer flex items-center rounded-l-full shadow hover:bg-gray-200 shadow-gray-400 justify-center bg-white ">
                        <Image className="w-11" src={searchIcon}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;