import express from 'express'
import cors from 'cors'
import db from './dbConnections.js';
import usersRouter from './Routers/users.js'
import categoryRouter from './Routers/category.js'

const app = express();

app.use (express.json()) //This is required to parse json file
app.use (cors()) //Allow all origin

app.use('/users', usersRouter)
app.use('/category', categoryRouter)

app.get("/", (req,res)=>{
    res.send ("This Server is running")
})

app.listen (4000,()=>(
    console.log("Server is running at port 4000")
))