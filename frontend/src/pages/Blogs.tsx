import { BlogCard } from "../components/BlogCard"
import { AppBar } from "../components/AppBar"
import { useBlogs } from "../hooks/useBlogs"
export const Blogs=()=>{
    const {loading,blogs}=useBlogs();
    if(loading){
        return(<div>
            loading...
        </div>)
    }
    return(
        <div>
            <AppBar/>
            <div className="flex justify-center">
                <div>
                    {blogs.map(blog=><BlogCard 
                        id={blog.id}
                        authorName={blog.author.name||"Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"02.02.2025"}
                    />)}
                </div>
            </div>
        </div>
    )
}

