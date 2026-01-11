import express from 'express'
import db from '../dbConnections.js'

const Router = express.Router()

Router.get ("/:categoryID", async(req, res)=> {
    // console.log ("Question Router, List Questions by categoryID ...")
    try {
      const categoryID = req.params.categoryID
      const result = await db.query ("SELECT * from questions WHERE category_id = ?", [categoryID] )
      console.log (result[0])
      res.status(200).send(result[0])
    } catch (error) {
      res.status(500).json({ message: "Failed to load questions" })
    }
  })