import { BlogCard } from "../components/BlogCard"
import { AppBar } from "../components/AppBar"
import { useBlogs } from "../hooks/useBlogs"
export const Blogs=()=>{
    const {loading,blogs}=useBlogs();
    return(
        <div>
            if(loading){
                <div>
                    loading...
                </div>
            }
            <AppBar/>
            <div className="flex justify-center">
                <div className="max-w-5xl">
                    <BlogCard 
                        authorName={"Dheeraj"}
                        title={"Title of Blog"}
                        content={"a aakakaakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaakakaakkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkaaa00 kakaakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaakakaakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaakakaakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkaaakakaakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkaaakakaakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"}
                        publishedDate={"02.02.2025"}
                    />
                    <BlogCard 
                        authorName={"Dheeraj"}
                        title={"Title of Blogbasbawrhbawfbababsfaef"}
                        content={"content of Blog"}
                        publishedDate={"02.02.2025"}
                    />
                    <BlogCard 
                        authorName={"Dheeraj"}
                        title={"Title of Blog"}
                        content={"content of Blog"}
                        publishedDate={"02.02.2025"}
                    />
                    <BlogCard 
                        authorName={"Dheeraj"}
                        title={"Title of Blog"}
                        content={"content of Blog"}
                        publishedDate={"02.02.2025"}
                    />
                    <BlogCard 
                        authorName={"Dheeraj"}
                        title={"Title of Blog"}
                        content={"content of Blog"}
                        publishedDate={"02.02.2025"}
                    />
                    <BlogCard 
                        authorName={"Dheeraj"}
                        title={"Title of Blog"}
                        content={"content of Blog"}
                        publishedDate={"02.02.2025"}
                    />
                </div>
            </div>
        </div>
    )
}

