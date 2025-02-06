import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign,verify} from 'hono/jwt';
import { userRouter } from './routes/user';
import blogRouter


const app = new Hono<{
  Bindings:{
    DATABASE_URL:string
    JWT_SECRET:string
  }
}>()


app.route("api/v1/user",userRouter)
app.route("api/v1/blog",blogRouter)

app.use('/api/v1/blog/*',async (c,next)=>{
  const header=c.req.header("authorization")||"";
  const token=header.split(' ')[1];
  const response=await verify(token,c.env.JWT_SECRET)
  if(response.id){
    next()
  }
  else{
    c.status(403)
    return c.json({error:"unauthorized"})
  }
})



export default app
