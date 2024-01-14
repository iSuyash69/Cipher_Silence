import Filters from "@components/filters/Filters";
import Listings from "@components/listings/listingsContainer/ListingsContainer";
import SearchBar from "@components/searchbar/SearchBar";

const Page=()=>{
    return(
        <div>
            <div className="flex flex-col  bg-[#C50042]">
                <SearchBar/>
                <Filters/>
            </div>
            <Listings/>
        </div>
    );
}

export default Page;