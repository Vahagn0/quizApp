import { useState } from "react"
import { useNavigate} from "react-router-dom"

function Answers({quiz}){
    const [score,setScore] = useState(0)
    const [index,setIndex] = useState(0)
    const [showScore,setShowScore] = useState(false)
    const navigate = useNavigate();
    console.log('log')
    const nextAnswer = (answer) => {
            if(index === quiz[0].quizBody.length - 1){
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
            <div className="questionDiv">{quiz[0].quizBody[index].question}</div>
            {quiz[0].quizBody[index].answer.map(item => {
                   return(
                    <p className="answer" onClick={() => nextAnswer(item.isTrue)} key={item._id}>
                        {item.answerText}
                    </p>
                    )
                }
            )
            }
            <div className="numberDiv">{index + 1 + "/" + quiz[0].quizBody.length}</div>
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