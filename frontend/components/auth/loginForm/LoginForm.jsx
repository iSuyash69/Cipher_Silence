"use client"
import axios from "axios";
import Link from "next/link";
import { Router } from "next/router";
import { useState } from "react";

const LoginForm=()=> {
   
  const baseUrl=process.env.NEXT_PUBLIC_BASE_API_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit=(e)=>{

    e.preventDefault();

    if(email == "" || password == ""){
      setError('Incomplete Credentials');
    }
    else{
      setError("");

      axios.post(`${baseUrl}/user/login`,{email,password})
      .then((response)=>{
        console.log(response.data.message);
      })
      .catch(()=>{
        setError("Something went wrong");
      });

    }
  };

  return (
    <div class="flex flex-col bg-gray-100 items-center min-h-screen  justify-center">
      <div class="flex items-center text-2xl font-semibold ">
      </div>
      <div class="w-full pb-3 rounded-[20px] bg-white bg-opacity-65 border-t-8 border-red-500 shadow  md:mt-0 sm:max-w-md ">
        <div class="p-6 space-y-4  md:space-y-6 sm:p-8">
          <h1 class="text-xl text-center font-bold">Sign in to your account</h1>
          <div class="space-y-4 md:space-y-6">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium ">Your email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" class="text-lg font-semibold text-black sm:text-sm bg-gray-100 rounded-lg border-gray-300 border block w-full p-2.5  placeholder:text-[#838383] bg-[#ffffffbd]" placeholder="name@email.com" required="" />
            </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium ">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" class=" sm:text-sm rounded-lg bg-gray-100 text-black border-gray-300 border block w-full p-2.5 bg-[#ffffffbd]" required="" />
          </div>
          <button onClick={handleSubmit} class="w-full text-white font-semibold  hover:bg-red-600 bg-red-500 rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
          {error && (
          <div className="bg-red-600 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
          </div>
          )}
          </div>
        </div>
        <Link className="flex justify-end gap-1 pr-4" href={'/register'}>Don't have an account ? <span className="underline"> Register</span></Link>
      </div>
    </div>
  );
}
 

export default LoginForm;