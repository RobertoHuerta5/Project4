import express from 'express'
import db from '../dbConnections.js'

const Router = express.Router()

Router.post ('/', async (req,res)=>{
    try {
        const {user_name, user_password} = req.body
        console.log(user_name, user_password)
        const [result] = await db.query ("SELECT * FROM users WHERE user_name= ? AND user_password= ?", [user_name, user_password])
        if (result.length === 0 )
            res.status(404).send({ message: "Invalid username or password" })
        else 
            res.status(200).json(result[0])
    }
    catch (error){
        res.status(500).send("Server error while listing users", error)
    }

})

export default Router;