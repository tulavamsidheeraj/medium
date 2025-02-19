import { Link } from "react-router-dom";

interface BlogCardProps{
    id:number;
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
}
export const BlogCard=({id,authorName,title,content,publishedDate}:BlogCardProps)=>{
    return(
        <Link to={`/blog/${id}`}>
            <div className="border-b border-slate-200 p-4 w-screen max-w-screen-lg cursor-pointer">
            <div className="flex">
                <Avatar name={authorName} /> 
                
                <div className="pl-2 font-extralight text-sm flex justify-center flex-col">
                {authorName}</div>
                <div>
                    <Circle/>
                </div>
                <div className="pl-2 font-thin text-slate-400 flex justify-center flex-col">
                 {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin pt-1">
                {content.slice(0,100)+"..."}
            </div>
            <div className="text-slate-400 font-thin pt-4">
                {`${Math.ceil(content.length/100)} minute read`}
            </div>
            </div>
        </Link>
    )
}

export const Avatar=({name}:{name:string})=>{
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden rounded-full bg-slate-400">
        <span className="font-extralight text-gray-600">
            {name[0]}
        </span>
    </div>
}

function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-200">
    </div>
}