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
      {answerText:String,isTrue:Boolean},
      {answerText:String,isTrue:Boolean},
      {answerText:String,isTrue:Boolean}
    ]}]
})


const Question = mongoose.model("questions",questionSchema)
const User = mongoose.model("users",userSchema)
const Quiz = mongoose.model("quizes",quizSchema)

    const app = express()
    let jsonParser = bodyParser.json()
    app.use(cors())

        app.get("/", async (req,res)=>{
            const quiz = await Quiz.find({quizName:"matem quiz"})
            res.send(quiz)
        })

        app.post("/", jsonParser,async (req,res)=>{
            await new User({username: req.body.username,password: req.body.password}).save()
            res.send("ok")
        })

        app.get("/logIn/:username", async (req,res)=>{
            const user = await User.find({username :req.params.username})
            res.send(user)
          })

        app.post("/super",jsonParser,async (req,res)=>{
          const quiz = await Quiz.find({quizName: req.body.quizName})
          console.log(quiz)
          if(quiz.length === 0){
            await new Quiz({
              quizName:req.body.quizName,
              quizBody:[
                {
                  question:req.body.question,
                  answer: [
                    {
                      answerText: req.body.option1,
                      isTrue: false
                    },
                    {
                      answerText: req.body.option2,
                      isTrue: true
                    },
                    {
                      answerText: req.body.option3,
                      isTrue: false
                    },
                    {
                      answerText: req.body.option4,
                      isTrue: false
                    },
                  ]
                }
              ]
            }).save()
            res.send("ok")
          }else{
            console.log("nuynna")
          }
        })

    app.listen(process.env.PORT)



