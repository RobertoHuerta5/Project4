import express from 'express'
import db from '../dbConnections.js'

const Router = express.Router()

Router.post ("/", async(req, res)=>{
    try{
        const result= await db.query ("SELECT * from categories")
        res.status(200).json(result[0])
    } catch (error) {
        res.status(500).json({ message: "Failed to load categories" })
    }
})

export default Router;