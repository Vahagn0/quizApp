import { useState } from "react"
import Option from "./option"

function Super(){

    const [question,setQuestion] = useState("")
    const [quizName,setQuizName] = useState("")

    const [option1,setOption1] = useState("")
    const [option2,setOption2] = useState('')
    const [option3,setOption3] = useState('')
    const [option4,setOption4] = useState('')

    function addQuestion(){

        fetch(`http://localhost:3001/super/${quizName}`)
            .then((response) => response.json())
            .then((quiz) => {
                if(quiz.length === 0){
                    fetch("http://localhost:3001/super",
                    {
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify({
                            quizName: quizName,
                            question: question,
                            option1: option1,
                            option2: option2,
                            option3: option3,
                            option4: option4
                        })
                    })
                }else{
                    fetch(`http://localhost:3001/super/${quizName}`, {
                        method: 'PATCH',
                        body: JSON.stringify({
                            question: question,
                            option1: option1,
                            option2: option2,
                            option3: option3,
                            option4: option4
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                        })
                }

            })



    }

    return(
        <div>
            <form onSubmit={(e)=>{
                    e.preventDefault()
                    addQuestion()
                }}>
                <input type="text" placeholder="Quiz name" required onChange={(e)=>{
                    setQuizName(e.target.value)
                }}></input>
                <input type="text" placeholder="Question" required onChange={(e)=>{
                    setQuestion(e.target.value)
                }}></input>

                    <Option setOption={setOption1}/>
                    <Option setOption={setOption2}/>
                    <Option setOption={setOption3}/>
                    <Option setOption={setOption4}/>

                <button>submit</button>
            </form>
        </div>
    )
}

export default Super