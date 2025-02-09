import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { Bindings } from "hono/types";


export const userRouter=new Hono<{
Bindings:{
    DATABASE_URL:string;
    JWT_SECRET:string;
}}>()

userRouter.post('/signup',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())


  const body= await c.req.json()
  
  try{
    const user=await prisma.user.create({
      data:{
        username:body.username,
        password:body.password
      }
  });

    const token=await sign({id:user.id},c.env.JWT_SECRET)
    return c.json({jwt:token})
  }

  catch(e){
    return c.status(403)  
  }
})



userRouter.post('/signin',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
  
  
    const body=await c.req.json();
    try{
      const user=await prisma.user.findUnique({
        where:{
          username:body.username,
          password:body.password
        }
      });
      if(!user){
        c.status(403)
        return c.json({msg:"Invalid credentials"})
      }
      const token=await sign({id:user.id},c.env.JWT_SECRET)
      return c.json({token})
    }
    catch(e){
      return c.status(403)
    }
  })