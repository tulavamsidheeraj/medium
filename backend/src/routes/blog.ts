import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { Bindings } from "hono/types";

export const blogRouter=new Hono<{
Bindings:{
    DATABASE_URL:string
    JWT_SECRET:string
}}>()

blogRouter.use('/*',(c,next)=>{
    next();
});


blogRouter.post('/', async(c) => {
    const body=await c.req.json();
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:1
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
blogRouter.get('/', async(c) => {
    const body=await c.req.json();
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const post=await prisma.post.findFirst({
        where:{
            id:body.id
        },
        })
        return c.json({
            id:post
        })
    }
    catch(e){
        c.status(411)
        return c.json({
            msg:"Error while fetching the post"
        })
    }
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