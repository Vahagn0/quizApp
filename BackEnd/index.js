import express from "express"
import cors from 'cors'
import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.DB_URL)

const questionSchema = new mongoose.Schema({
  question : String,
  answer: [{answerText:String,isTrue:Boolean}]
}) 

const Question = mongoose.model("questions",questionSchema)

    const app = express()
    app.use(cors())

        app.get("/", async (req,res)=>{
            const questions = await Question.find()
            res.send(questions)
        })

    app.listen(process.env.PORT)


