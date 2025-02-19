import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
export const AppBar=()=>{
    return(
    <div className="border-b flex justify-between px-10 py-4">
        <Link to={"/blogs"} className="font-bold text-lg cursor-pointer">
                Medium
        </Link>
        <div>
            <Link to={"/publish"}>
            <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4">Publish</button>
            </Link>
            <Avatar name={"Dheeraj"}/>
        </div>
    </div>
)}