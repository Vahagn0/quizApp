import Option from "./option"
import { useFormik } from "formik"
import { addQuestion } from "./addQuestion"

function Super(){

    const answer = useFormik({
        initialValues: {
            answerText: "",
            isTrue: false
        }
    })

    const formik = useFormik({
        initialValues:{
            quizName: "",
            question:[],
        }
    })

    return(
        <div>
            <form onSubmit={(e)=>{
                    e.preventDefault()
                    addQuestion(formik)
                }}>
                <input 
                type="text"
                placeholder="quiz name" 
                name="quizName"
                required
                onChange={formik.handleChange}
                value={formik.values.quizName}
                />
                <input 
                type="text"
                placeholder="question" 
                name="question"
                required
                onChange={formik.handleChange}
                value={formik.values.question}
                />
                 <Option answer={answer} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Super