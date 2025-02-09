import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign ,verify } from "hono/jwt";
import { Bindings } from "hono/types";

export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string;
    },
    Variables:{
        userId:string;
    }
}>()

blogRouter.use('/*',async (c,next)=>{
    const authHeader=c.req.header("authorization")||"";
    try
    {
    const user=await verify(authHeader,c.env.JWT_SECRET);
    if(user){
        await c.set("userId",user.id)
        await next();
    }
    else{
        c.status(403);
        return c.json({
            message:"You are not logged in"
        })
    }}
    catch(e){
        c.status(403);
        return c.json({message:"You are not logged in"})
    }
});


blogRouter.post('/', async(c) => {
    const body=await c.req.json();
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const authorId=c.get("userId")
    const post=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:Number(authorId)
        }
    })
    return c.json({id:post.id})
})
blogRouter.put('/', async(c) => {
    const body=await c.req.json();
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post =await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content,

        }
    })
    return c.json({id:post.id})

})

blogRouter.get('/bulk',async(c)=>{
    const body=await c.req.json();
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs=await prisma.post.findMany();
    return c.json({
        blogs
    })
})

blogRouter.get('/:id', async(c) => {
    const id=await c.req.param("id");
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const post=await prisma.post.findFirst({
        where:{
            id:Number(id)
        },
        })
        return c.json({
            post
        })
    }
    catch(e){
        c.status(411)
        return c.json({
            msg:"Error while fetching the post"
        })
    }
})
