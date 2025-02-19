import { AppBar } from "./AppBar"
import { Blog } from "../hooks/useBlogs"
import { Avatar } from "./BlogCard"

export const FullBlog=({blog}:{blog:Blog})=>{
    return (
        <div>
            <AppBar/>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-12">
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2">
                            Posted on 02-Feb-2025
                        </div>
                        <div className="text-xl">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="text-slate-600 text-lg">
                            Author
                        </div>
                        <div className="flex w-full">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar name={blog.author.name || "Anonymous"} />
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    HEHEHEHEHEHEHEHEHEHHEHEHEHEHEHEHEHEHEHEHHEHEHEHEHE
                                </div>            
                            </div>

                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}