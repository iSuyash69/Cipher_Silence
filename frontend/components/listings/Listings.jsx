"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import ListingCard from "./listingCard/ListingCard";

const Listings=()=>{

    const [listingsData,setListingsData]=useState([]);
    const baseUrl=process.env.NEXT_PUBLIC_BASE_API_URL;

    useEffect(()=>{
        fetchListingsData();
    },[]);

    const fetchListingsData=()=>{
        axios.get(`${baseUrl}/listings`)
        .then((response)=>{
            setListingsData(response.data);
            console.log(response.data);
        })
        .catch(()=>{
            console.log("Listings API request failed");
        });
    }

    if(listingsData.length==0){
        return(
            <div className="flex w-full h-screen items-center justify-center">
                <h1 className="text-xl font-semibold">Loading....</h1>
            </div>
        );
    }

    return(
        <div className="flex gap-8 w-full px-10 mt-24 flex-wrap justify-center">
            {listingsData.map((card,key)=>{
                return <ListingCard card={card} key={key}/>
            })}
        </div>
    );
}

export default Listings;