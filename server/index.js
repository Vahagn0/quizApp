import express from "express"
import cors from 'cors'
import { MongoClient } from "mongodb"

  const client = new MongoClient("mongodb://localhost:27017")

  async function a(){
    await client.connect()

    const cleanup = (evt) =>{
      client.close()
      process.exit()
    }
    
    process.on("SIGINT",cleanup)
    process.on("SIGTERM",cleanup)

    const db = client.db("quiz")
    const collection = db.collection("questions")


    //express

    const app = express()

    app.use(cors())

        app.get("/", async (req,res)=>{
            const questions = await collection.find({}).toArray()
            res.send(questions)
        })

    app.listen(3001)

  }
  a()

