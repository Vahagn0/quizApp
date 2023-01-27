import express from "express"
import cors from 'cors'
import mongoose from "mongoose"
import * as dotenv from 'dotenv'
import bodyParser from "body-parser"

dotenv.config()

mongoose.connect(process.env.DB_URL)

const questionSchema = new mongoose.Schema({
  question : String,
  answer: [{answerText:String,isTrue:Boolean}]
}) 

const userSchema = new mongoose.Schema({
    username : String,
    password: String
  }) 

const quizSchema = new mongoose.Schema({
    quizName: String,
    quizBody: [{
      question:String,
      answer:[
      {answerText:String,isTrue:Boolean},
    ]}]
})


const Question = mongoose.model("questions",questionSchema)
const User = mongoose.model("users",userSchema)
const Quiz = mongoose.model("quizes",quizSchema)

    const app = express()
    let jsonParser = bodyParser.json()
    app.use(cors())

        app.get("/quiz/:quizName", async (req,res)=>{
            const quiz = await Quiz.find({quizName: req.params.quizName})
            res.send(quiz)
        })

        app.get("/quizes", async (req,res)=>{
          const quizes = await Quiz.find()
          res.send(quizes)
        })

        app.post("/", jsonParser,async (req,res)=>{
            await new User({username: req.body.username,password: req.body.password}).save()
            res.send("ok")
        })

        app.get("/logIn/:username", async (req,res)=>{
            const user = await User.find({username :req.params.username})
            res.send(user)
          })

          app.get("/super/:quizName", async (req,res)=>{
            const user = await Quiz.find({quizName: req.params.quizName})
            res.send(user)
          })


        app.post("/super",jsonParser,async (req,res)=>{
            await new Quiz({
              quizName:req.body.quizName,
              quizBody:[
                {
                  question:req.body.question,
                  answer: [
                    req.body.option1,
                    req.body.option2,
                    req.body.option3,
                    req.body.option4
                  ]
                },
              ]
            }).save()
            res.send("ok")
        })

    app.listen(process.env.PORT)



