"use client"

import axios from "axios";
import { useEffect, useState } from "react";

const ViewListing=({title})=>{

    const [listingData,setListingData]=useState([]);
    const baseUrl=process.env.NEXT_PUBLIC_BASE_API_URL;
    
    useEffect(()=>{
        fetchListingsData();
    },[]);

    const fetchListingsData=()=>{
        axios.get(`${baseUrl}/listings/${title}`)
        .then((response)=>{
            console.log(response.data);
            setListingData(response.data);
        })
        .catch(()=>{
            console.log(`Failed to get ${title} data`);
        });
    };

    if(listingData.length==0){
        return(
            <div className="flex w-full h-screen items-center justify-center">
                <h1 className="text-xl font-semibold">Loading....</h1>
            </div>
        );
    }

    return(
        <div className="pt-20 px-48  min-h-screen bg-purple-50 flex flex-col">
            <h1 className="mt-5 text-3xl font-medium">{listingData[0]?.title}</h1>
            <div style={{width:'650px',height:'400px' }} className="mt-5 overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={listingData[0]?.image.url}></img>
            </div>
            <h3 style={{width:'650px'}} className="text-lg mt-3 mb-7">{listingData[0]?.description}</h3>
            {(listingData[0]?.reviews.length!=0)?(
                <div className="">
                    <h1 className="text-lg">Reviews</h1>
                </div>
            ):(
                <h1 className="text-lg">No Reviews Yet</h1>
            )}
        </div>
    );
}

export default ViewListing;