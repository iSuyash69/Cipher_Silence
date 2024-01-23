"use client"
import Filters from "@components/filters/Filters";
import Listings from "@components/listings/listingsContainer/ListingsContainer";
import SearchBar from "@components/searchbar/SearchBar";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Page=()=>{

    const baseUrl=process.env.NEXT_PUBLIC_BASE_API_URL;

    useEffect(()=>{
        
        const token=Cookies.get('token');
        
        if(token){
            axios.post(`${baseUrl}/user/verify`,{},{
                headers:{
                    'Authorization':token
                }
            })
            .then((response)=>{
                console.log(response.data);
            })
            .catch(()=>{
                console.log("Authentication failed");
            })
        }

    },[]);

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