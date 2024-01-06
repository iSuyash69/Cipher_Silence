"use client"
import Form from "@components/listings/addListing/Form";
import RemoveListing from "@components/listings/removeListing/RemoveListing";
import { useState } from "react";

const Page=()=>{

    const [removeForm,setRemoveForm]=useState(false);

    const removeListingClickHandler=()=>{
        setRemoveForm(true);
    }

    return(
        <div>
            <Form/>
            <button onClick={removeListingClickHandler} className="mt-20 absolute right-10 bg-purple-600 p-2.5 px-3 hover:bg-purple-700 rounded-lg text-white font-semibold">Remove Listing</button>
            {removeForm ? <RemoveListing setRemoveForm={setRemoveForm}/> : null}
        </div>
    );
}

export default Page;