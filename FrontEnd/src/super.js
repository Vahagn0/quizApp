import { useState } from "react"

function Super(){

    const [question,setQuestion] = useState("")
    const [quizName,setQuizName] = useState("")

    const [option1,setOption1] = useState({})
    const [option1Correction,setOption1Correction] = useState(false)
    const [option1Text,setOption1Text] = useState("")

    const [option2,setOption2] = useState('')
    const [option2Correction,setOption2Correction] = useState(false)
    const [option2Text,setOption2Text] = useState("")

    const [option3,setOption3] = useState('')
    const [option3Correction,setOption3Correction] = useState(false)
    const [option3Text,setOption3Text] = useState("")

    const [option4,setOption4] = useState('')
    const [option4Correction,setOption4Correction] = useState(false)
    const [option4Text,setOption4Text] = useState("")

    function addQuestion(){
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
        .then(function(){console.log("ok")})
        .catch(function(res){ console.log(res) })
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
                
            {/* options */}
            {/* 1 */}
                    <input type="text" placeholder="option1" required onChange={(e)=>{
                        setOption1Text(e.target.value)
                        setOption1({
                            answerText: e.target.value,
                            isTrue: option1Correction
                        })
                    }}></input>
                    <input type="checkbox" onChange={()=>{
                        setOption1Correction(!option1Correction)
                        setOption1({
                            answerText: option1Text,
                            isTrue: option1Correction
                        })
                    }}></input>
            {/* 2 */}
                    <input type="text" placeholder="option1" required onChange={(e)=>{
                        setOption2Text(e.target.value)
                        setOption2({
                            answerText: e.target.value,
                            isTrue: option1Correction
                        })
                    }}></input>
                    <input type="checkbox" onChange={()=>{
                        setOption2Correction(!option1Correction)
                        setOption2({
                            answerText: option1Text,
                            isTrue: option1Correction
                        })
                    }}></input>
            {/* 3 */}
                     <input type="text" placeholder="option1" required onChange={(e)=>{
                        setOption3Text(e.target.value)
                        setOption3({
                            answerText: e.target.value,
                            isTrue: option1Correction
                        })
                    }}></input>
                    <input type="checkbox" onChange={()=>{
                        setOption3Correction(!option1Correction)
                        setOption3({
                            answerText: option1Text,
                            isTrue: option1Correction
                        })
                    }}></input>
            {/* 4 */}
                     <input type="text" placeholder="option1" required onChange={(e)=>{
                        setOption4Text(e.target.value)
                        setOption4({
                            answerText: e.target.value,
                            isTrue: option1Correction
                        })
                    }}></input>
                    <input type="checkbox" onChange={()=>{
                        setOption4Correction(!option1Correction)
                        setOption4({
                            answerText: option1Text,
                            isTrue: option1Correction
                        })
                    }}></input>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Super