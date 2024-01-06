import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";

const RemoveListing=({setRemoveForm})=>{

    const baseUrl=process.env.NEXT_PUBLIC_BASE_API_URL;

    const [listingData,setListingsData]=useState([]);

    useEffect(()=>{
        fetchListingData();
    },[]);

    const fetchListingData=()=>{
        axios.get(`${baseUrl}/listings`)
        .then((response)=>{
            console.log(response.data);
            setListingsData(response.data);
        })
        .catch(()=>{
            console.log("failed to fetch listing data");
        });
    };

    const initialValues={
        title:"",
    };

    const {values,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        onSubmit:(values,action)=>{
            console.log(values);
            axios.delete(`${baseUrl}/listings/${values.title}`)
            .then((response)=>{
                console.log(response.data);
                action.resetForm();
                toast.success("Listing Deleted Successfully");
            })
            .catch((err)=>{
                console.log("Post request failed");
                toast.error("Something went wrong");
            });
        },
    });

    const onCloseHandler=()=>{
        setRemoveForm(false);
    };


    return(
    <div style={{minHeight:"calc(100vh - 64px"}} className="absolute w-full  mt-8 bg-gray-400 backdrop-blur-md bg-opacity-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <form onSubmit={handleSubmit} style={{maxHeight:'90vh',overflow:'auto'}} className="flex shadow-md shadow-pink-300/50 text-black scrollbar-style relative py-5 px-16 bg-gray-100 rounded-xl flex-col">
            <h3 className="text-2xl m-auto font-semibold   mb-9">Remove Listing</h3>
            <RxCross2 onClick={onCloseHandler} className="text-3xl absolute  rounded-full  top-2 right-3 cursor-pointer"/>
            <div className="mb-4 flex gap-8 m-auto">
                <div>
                    <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Select Listing</label>  
                    <select name="title" value={values.title} onChange={handleChange} onBlur={handleBlur} className="w-96 bg-gray-50 border border-gray-500 p-2.5 rounded-lg leading-tight" required>
                        <option className="hidden" value="">Select an option</option>
                        {listingData.map((card,key)=>{
                            return(
                                <option key={key} value={card.title}>{card.title}</option>
                            );
                        })};
                    </select>                    
                </div> 
            </div> 
            <div className="m-auto mt-3 flex gap-3 ">
                <button type="submit" className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2">Delete</button>
            </div>
        </form>
    </div>
    );
}

export default RemoveListing;