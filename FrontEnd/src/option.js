import { useState } from "react"

function Option({setOption}){

    
    const [optionCorrection,setOptionCorrection] = useState(false)
    const [optionText,setOptionText] = useState("")
    function handleClick(){
        setOption({
            answerText: optionText,
            isTrue: optionCorrection
        })
    }   


    return(
    <div>
        <input type="text" placeholder="option" required onChange={(e)=>{
            setOptionText(e.target.value)
            handleClick()
         }}></input>
         <input type="checkbox" onChange={(e)=>{
            setOptionCorrection(!optionCorrection)
            handleClick()
        }}></input>
    </div>
    )
   
}

export default Option