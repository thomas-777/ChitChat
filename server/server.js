import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {app, server } from './socket/socket.js';



dotenv.config()
const PORT=process.env.port || 5000
const clientURL=process.env.CLIENT_URL
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
console.log(`client URL is ${clientURL}`)
app.use(cors({
    origin: `${clientURL}`, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true
  }));
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server running at ${PORT}`)})