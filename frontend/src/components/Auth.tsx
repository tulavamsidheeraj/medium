import { SignupInput } from "@100xdevs/medium-common";
import { ChangeEvent, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Auth=({ type }:{ type:"signup"|"signin" })=>{
    const [postInputs,setPostInputs]=useState<SignupInput>({
        name:"",
        username:"",
        password:""
    })
    const navigate=useNavigate();
    async function SendRequest(){
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs);
            const jwt=response.data;
            localStorage.setItem("token",jwt);
            navigate("/blogs");
        }
        catch(e){

        }

    }
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-bold">
                            {type==="signup"? "Create an account":"Login to your account"}
                        </div>
                        <div className="text-slate-400">
                            {type==="signup"?"Don't have an account":"Already have an account ?"}
                            <Link to={type==="signin"?"/signup":"/signin"} className="pl-2 underline">
                                {type==="signin"?"Sign in":"Sign up"}
                            </Link>
                        </div>
                    </div>
                    <div className="pt-8">
                        {type==="signup"?<LabelledInput label="Name" placeholder="enter the name" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                name:e.target.value
                            })
                        }}/>:null}
                        <LabelledInput label="Username" placeholder="enter the username" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                username:e.target.value
                            })
                        }}/>
                        <LabelledInput label="Password" type={"password"} placeholder="set the password" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                password:e.target.value
                            })
                        }}/>
                    </div>
                    <div>
                        <button onClick={SendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"> {type==="signin"?"Sign In":"Sign Up"} </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
interface labelledInputType{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string;
}
function LabelledInput({label,placeholder,onChange,type}:labelledInputType){
    return(
        <div className="pt-2">
            <label className="block mb-2 font-bold text-gray-900">{label}</label>
            <input onChange={onChange} type={type||"text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required/>
        </div>
    )
}