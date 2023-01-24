import { useState } from "react"

function Answers({questions}){
    const [score,setScore] = useState(0)
    const [i,setI] = useState(0)
    const [showScore,setShowScore] = useState(false)

    const nextAnswer = (answer) => {
        if(i <= questions.length - 1){
            if(i === questions.length - 1){
                setShowScore(true)
            }
            setI(i + 1)
            if(answer){
                setScore(score + 1)
            }
        }
    }

    return(
        <div>
            {!showScore ? <>
            <div className="questionDiv">{questions[i].question}</div>
            {questions[i].answer.map(item => {
                   return(
                    <p className="answer" onClick={() => nextAnswer(item.isTrue)} key={item._id}>
                        {item.answerText}
                    </p>
                    )
                }
            )
            }
            <div className="numberDiv">{i + 1 + "/" + questions.length}</div>
            </>  : <div id="scoreDiv">{"your score is " + score }</div> 
             }
        </div> 
    )
  
}

export default Answers