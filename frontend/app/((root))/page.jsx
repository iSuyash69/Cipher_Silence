import Listings from "@components/listings/listingsContainer/ListingsContainer";
import SearchBar from "@components/searchbar/SearchBar";

const Page=()=>{
    return(
        <div>
            <SearchBar/>
            <Listings/>
        </div>
    );
}

export default Page;