import express from "express"
import cors from 'cors'
import mongoose from "mongoose"
import bodyParser from "body-parser"

mongoose.connect("mongodb://localhost:27017/quiz")

const questionSchema = new mongoose.Schema({
  question : String,
  answer: Array
}) 

const Question = mongoose.model("questions",questionSchema)

    //express

    const app = express()
    app.use(cors())
    let jsonParser = bodyParser.json()


    app.use(cors())

        app.get("/", async (req,res)=>{
            const questions = await Question.find()
            res.send(questions)
        })

    app.listen(3001)


