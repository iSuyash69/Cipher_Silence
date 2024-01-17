import LoginForm from "@components/auth/loginForm/LoginForm";
import Filters from "@components/filters/Filters";
import Listings from "@components/listings/listingsContainer/ListingsContainer";
import SearchBar from "@components/searchbar/SearchBar";

const Page=()=>{
    return(
        <div>
            <div>
                <SearchBar/>
                <Filters/>
            </div>
            <Listings/>
        </div>
    );
}

export default Page;