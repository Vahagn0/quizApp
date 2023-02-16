
function Option({answer}){

    return(
        <div>
            <input 
            type="text" 
            placeholder="option" 
            required 
            name="answerText"
            onChange={answer.handleChange}
            value={answer.values.answerText}
            />
            <input 
            type="checkbox"
            name="isTrue"
            onChange={answer.handleChange}
            value={answer.values.answerText}
            />
        </div>
    )
   
}

export default Option