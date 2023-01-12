import express from "express"
import cors from 'cors'

const app = express()

app.use(cors())

  const questions = [
        {
          question: "What's the capital of France ?",
          answer: [
            { answerText: "Moscow", isTrue: false },
            { answerText: "Paris", isTrue: true },
            { answerText: "Berlin", isTrue: false },
            { answerText: "Antananarivu", isTrue: false },
          ],
        },
        {
          question: "Who was first president of USA ?",
          answer: [
            { answerText: "Harry S. Truman", isTrue: false },
            { answerText: "Bill Clinton", isTrue: false },
            { answerText: "George Washington", isTrue: true },
            { answerText: "Ronald Reagan", isTrue: false },
          ],
        },
        {
          question: "Whats the oldest country ?",
          answer: [
            { answerText: "Japan", isTrue: false },
            { answerText: "Vietnam", isTrue: false },
            { answerText: "Egypt", isTrue: true },
            { answerText: "Armenia", isTrue: false },
          ],
        },
      ];

    app.get("/",(req,res)=>{
        res.send(questions)
    })

app.listen(3001)