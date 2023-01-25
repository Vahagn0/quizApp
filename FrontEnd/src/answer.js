import { useState } from "react"

function Answers({questions}){
    const [score,setScore] = useState(0)
    const [index,setIndex] = useState(0)
    const [showScore,setShowScore] = useState(false)

    const nextAnswer = (answer) => {
            if(index === questions.length - 1){
                setShowScore(true)
            }
            setIndex(index + 1)
            if(answer){
                setScore(score + 1)
            }
        
    }

    return(
        <div>
            {!showScore ? <>
            <div className="questionDiv">{questions[index].question}</div>
            {questions[index].answer.map(item => {
                   return(
                    <p className="answer" onClick={() => nextAnswer(item.isTrue)} key={item._id}>
                        {item.answerText}
                    </p>
                    )
                }
            )
            }
            <div className="numberDiv">{index + 1 + "/" + questions.length}</div>
            </>  : <div id="scoreDiv">{"your score is " + score }</div> 
             }
        </div> 
    )
  
}

export default Answers