import { Avatar } from "./BlogCard"

export const AppBar=()=>{
    return(
    <div className="border-b flex justify-between px-10 py-4">
        <div className="font-bold text-lg">
            Medium
        </div>
        <div>
            <Avatar name={"Dheeraj"}/>
        </div>
    </div>
)}