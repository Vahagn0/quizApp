import { useState } from "react"

function Super(){

    const [question,setQuestion] = useState("")
    const [quizName,setQuizName] = useState("")
    const [option1,setOption1] = useState("")
    const [option2,setOption2] = useState('')
    const [option3,setOption3] = useState('')
    const [option4,setOption4] = useState('')

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
                {/* <form> */}
                    <input type="text" placeholder="option1" required onChange={(e)=>{
                        setOption1(e.target.value)
                    }}></input>
                    <input type="checkbox"></input>
                {/* </form>
                <form>  */}
                    <input type="text" placeholder="option2" required onChange={(e)=>{
                        setOption2(e.target.value)
                    }}></input>
                    <input type="checkbox"></input>
                {/* </form>
                <form> */}
                    <input type="text" placeholder="option3" required onChange={(e)=>{
                        setOption3(e.target.value)
                    }}></input>
                    <input type="checkbox"></input>
                {/* </form>
                <form> */}
                    <input type="text" placeholder="option4" required onChange={(e)=>{
                        setOption4(e.target.value)
                    }}></input>
                    <input type="checkbox"></input>
                {/* </form> */}
                <button>submit</button>
            </form>
        </div>
    )
}

export default Super