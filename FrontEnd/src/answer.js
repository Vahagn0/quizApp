import { useState } from "react"
import { useNavigate} from "react-router-dom"

function Answers({questions}){
    const [score,setScore] = useState(0)
    const [index,setIndex] = useState(0)
    const [showScore,setShowScore] = useState(false)
    const navigate = useNavigate();

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
            </>  : <>
                <div id="scoreDiv">{"your score is " + score }</div> 
                <button className="button" onClick={()=> window.location.reload()}> retry</button>
                <button  className="button" onClick={()=>{navigate("/")}}>back to log in</button>
            </>
             }
        </div> 
    )
  
}

export default Answers