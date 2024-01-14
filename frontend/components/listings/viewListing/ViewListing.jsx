"use client"

import axios from "axios";
import { useEffect, useState } from "react";

const ViewListing=({title})=>{

    const baseUrl=process.env.NEXT_PUBLIC_BASE_API_URL;

    const [listingData,setListingData]=useState([]);
    const [review,setReview]=useState({
        comment:'',
        rating:''
    });

    
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

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(review);
        axios.post(`${baseUrl}/listings/${title}/reviews`,review)
        .then((response)=>{
            console.log(response.data.message);
            setReview({
                comment:'',
                rating:'',
            });
        })
        .catch(()=>{
            console.log('something went wrong');
        });
    }

    return(
        <div className="pt-20 px-48  min-h-screen bg-purple-50 flex flex-col">
            <h1 className="mt-5 text-3xl font-medium">{listingData[0]?.title}</h1>
            <div style={{width:'650px',height:'400px' }} className="mt-5 overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={listingData[0]?.image.url}></img>
            </div>
            <h3 style={{width:'650px'}} className="text-lg mt-3 mb-5">{listingData[0]?.description}</h3>
            <hr></hr>
            <h1 className="text-lg font-medium mt-5 mb-3"> Reviews :</h1> 
            <form onSubmit={handleSubmit} className="flex gap-2 items-center mb-2">
                <div>
                    <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Leave a review : </label>
                    <textarea  name="title"  type="text" id="first_name" className="bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 p-2.5" value={review.comment} placeholder="write here" onChange={(e)=>{setReview({...review,comment:e.target.value})}} required></textarea>
                </div>
                <div>
                    <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Rating</label>  
                    <select name="department" className="w-56 bg-gray-50 border border-gray-500 p-2.5 rounded-lg leading-tight" value={review.rating} onChange={(e)=>{setReview({...review,rating:e.target.value})}} required>
                        <option className="hidden" value="">Select an option</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select> 
                </div>
                <button type="submit" className="focus:outline-none mt-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2">Submit</button>
            </form>
            {(listingData[0]?.reviews.length!=0)?(
                <div className="mt-2 mb-5">
                    <p className="mb-3 font-medium">Total Reviews: {listingData[0]?.reviews.length}</p> 
                    <div className="flex gap-5">
                    {listingData[0].reviews.map((review,key)=>{
                        return(
                            <div className="flex flex-col p-3  rounded-lg bg-gray-200" key={key}>
                                <div className="flex justify-between pr-1">
                                    <p className="text-sm mb-1 font-medium">User: {key+1}</p>
                                    <p className="text-sm font-medium">{new Date(review.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                </div>
                                <h1 className="w-56">{review.comment}</h1>
                                <h2>Rating: {review.rating}</h2>
                            </div>
                        );
                    })}
                    </div>
                </div>
            ):(
                <h1 className="text-lg mb-5">No Reviews Yet</h1>
            )}
        </div>
    );
}

export default ViewListing;