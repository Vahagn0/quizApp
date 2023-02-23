import bodyParser from "body-parser"
import mongoose from "mongoose"
import express from "express"

const router = express.Router()

let jsonParser = bodyParser.json()


const questionAnswersSchema = new mongoose.Schema({
    quizName: String,
    quizBody: []
})

export const QuestionAnswerQuiz = mongoose.model("quizes",questionAnswersSchema)

router.get("/:quizName", async (req,res)=>{
  const quiz = await QuestionAnswerQuiz.find({quizName: req.params.quizName})
  res.send(quiz)
})


router.post("/",jsonParser,async (req,res)=>{
console.log(req.body.options)
  await new QuestionAnswerQuiz({
    quizName:req.body.quizName,
    quizBody:[
      {
        question:req.body.question,
        answer: req.body.options
      },
    ]
  }).save()
  res.send("ok")
})

router.patch("/:quizName",jsonParser,async (req,res)=>{
const quiz = await QuestionAnswerQuiz.find({quizName: req.params.quizName})
const previousData =  quiz[0].quizBody
const newData =  [ 
  ... previousData,
  {
  question:req.body.question,
  answer: req.body.options
}
]

await QuestionAnswerQuiz.updateOne({quizName: req.params.quizName}, { $set: {quizBody: newData } })

res.send(newData)
})

export default router