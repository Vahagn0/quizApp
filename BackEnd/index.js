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

const Question = mongoose.model("questions",questionSchema)
const User = mongoose.model("users",userSchema)

    const app = express()
    let jsonParser = bodyParser.json()
    app.use(cors())

        app.get("/", async (req,res)=>{
            const questions = await Question.find()
            res.send(questions)
        })

        app.post("/", jsonParser,async (req,res)=>{
            await new User({username: req.body.username,password: req.body.password}).save()
            res.send("ok")
        })

        app.get("/logIn/:username", async (req,res)=>{
            const userName = req.params.username
            const user = await User.find({username :userName})
            res.send(user)
          })

    app.listen(process.env.PORT)


