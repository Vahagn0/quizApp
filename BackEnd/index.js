import express from "express"
import cors from 'cors'
import mongoose from "mongoose"
import * as dotenv from 'dotenv'
import  questionOptions from "./superRoutes/questionAnswers.js"
import { QuestionAnswerQuiz } from "./superRoutes/questionAnswers.js"

dotenv.config()

mongoose.connect(process.env.DB_URL)

const app = express()
app.use(cors())
app.use("/super",questionOptions)
  

    app.get("/quiz/:quizName", async (req,res)=>{
        const quiz = await QuestionAnswerQuiz.find({quizName: req.params.quizName})
        res.send(quiz)
    })

    app.get("/quizes", async (req,res)=>{
      const quizes = await QuestionAnswerQuiz.find()
      res.send(quizes)
    })

    app.listen(process.env.PORT)

    export default app

