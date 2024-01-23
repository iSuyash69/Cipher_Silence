"use client"
import { useFormik} from "formik";
import { validationSchema } from "./FormValidation";
import axios from "axios";
import {toast } from "sonner";

const Form=()=>{

    const baseUrl=process.env.NEXT_PUBLIC_BASE_API_URL;

    const initialValues={
        title:"",
        price:"",
        description:"",
        img_url:"",
        country:"",
        location:"",
    }

    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:validationSchema,
        onSubmit:(values,action)=>{

            const formattedData={
                title:values.title,
                description:values.description,
                image:{
                    url:values.img_url,
                },
                price:parseInt(values.price),
                location:values.location,
                country:values.country,
            };

            console.log(formattedData);
            
            axios.post(`${baseUrl}/listings`,formattedData)
            .then((response)=>{
                console.log(response.data);
                action.resetForm();
                toast.success("Listing Added Successfully");
            })
            .catch((err)=>{
                console.log("Post request failed");
                toast.error('Something went wrong');
            });
        },
    });

    return(
        <div style={{height:'calc(100vh - 64px'}} className="absolute mt-8 w-full bg- top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <form onSubmit={handleSubmit} style={{maxHeight:'90vh',overflow:'auto'}} className="flex shadow-lg ring-2 ring-pink-100  shadow-pink-300/50 text-black scrollbar-style relative py-5 px-16 bg-gray-100 rounded-xl flex-col">
                <h3 className="text-2xl m-auto font-semibold   mb-9">Add New Listing</h3>
                <div className="mb-4 flex gap-8 m-auto">
                    <div className="w-full">
                        <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Title</label>
                        <input  name="title" value={values.title} onChange={handleChange} onBlur={handleBlur} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5" placeholder="Title" required/>
                        {errors.title && touched.title ?(
                            <p className="text-sm mt-1 text-red-600 font-medium">{errors.title}</p>
                        ):(null)}
                    </div>
                    <div>
                        <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Price</label>
                        <input name="price" value={values.price} onChange={handleChange} onBlur={handleBlur} type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus focus:border-blue-500 w-96 p-2.5"  placeholder="2500" required/>
                        {errors.price && touched.price ?(
                            <p className="text-sm mt-1 text-red-600 font-medium">{errors.price}</p>
                        ):(null)}
                    </div>
                </div>
                <div className="mb-4 flex gap-8 m-auto">
                    <div>
                        <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Country</label>
                        <input name="country" value={values.country} onChange={handleChange} onBlur={handleBlur} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus focus:border-blue-500 w-96 p-2.5" placeholder="India" required/>
                        {errors.country && touched.country ?(
                            <p className="text-sm mt-1 text-red-600 font-medium">{errors.country}</p>
                        ):(null)}
                    </div>
                    <div>
                        <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Location</label>
                        <input name="location" value={values.location} onChange={handleChange} onBlur={handleBlur} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus focus:border-blue-500 w-96 p-2.5" placeholder="Rajasthan" required/>
                        {errors.location && touched.location ?(
                            <p className="text-sm mt-1 text-red-600 font-medium">{errors.location}</p>
                        ):(null)}
                    </div>
                </div>
                <div className="mb-4 flex gap-8 m-auto">
                    <div className="w-full">
                        <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Image Link</label>
                        <input  name="img_url" value={values.img_url} onChange={handleChange} onBlur={handleBlur} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[52vw] p-2.5" placeholder="Enter image URL/Link" required/>
                        {errors.img_url && touched.img_url ?(
                            <p className="text-sm mt-1 text-red-600 font-medium">{errors.img_url}</p>
                        ):(null)}
                    </div>
                </div>
                <div className="mb-4 flex gap-8 m-auto">
                    <div className="w-full">
                        <label for="first_name" className="block mb-2 text-md font-medium text-gray-900 ">Description</label>
                        <input  name="description" value={values.description} onChange={handleChange} onBlur={handleBlur} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[52vw] p-2.5" placeholder="Description" required/>
                        {errors.description && touched.description ?(
                            <p className="text-sm mt-1 text-red-600 font-medium">{errors.description}</p>
                        ):(null)}
                    </div>
                </div>
                <div className="m-auto mt-3 flex gap-3 ">
                    <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;