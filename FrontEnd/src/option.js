import { useState } from "react"

function Option({setOption}){

    
    const [optionCorrection,setOptionCorrection] = useState(false)
    const [optionText,setOptionText] = useState("")


    return(
    <div>
        <input type="text" placeholder="option" required onChange={(e)=>{
            setOptionText(e.target.value)
            setOption({
                answerText: e.target.value,
                isTrue: optionCorrection
            })
         }}></input>
         <input type="checkbox" onChange={(e)=>{
            setOptionCorrection(!optionCorrection)
            setOption({
                answerText: optionText,
                isTrue: optionCorrection
            })
         }}></input>
    </div>
    )
   
}

export default Option