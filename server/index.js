import express from 'express'
import cors from 'cors'

const app = express();

app.use (express.json()) //This is required to parse json file
app.use (cors()) //Allow all origin