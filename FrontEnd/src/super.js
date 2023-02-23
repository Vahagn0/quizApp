import { useState } from "react"
import QuestionOptions from "./questionOptions/questionOptions"

function Super(){

    const [hideButtons,setHideButtons] = useState(true)
    const [questionOptions,setQuestionOptions] = useState(false)

    return(
        <div>
            {hideButtons && 
                <button onClick={()=> {
                    setHideButtons(!hideButtons)
                    setQuestionOptions(!questionOptions)
                }}>question with options</button> 
            }
            {questionOptions &&
                <QuestionOptions />
            }
        </div>
    )
}

export default Super

