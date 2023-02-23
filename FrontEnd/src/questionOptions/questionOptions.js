import { Field, FieldArray,FormikProvider,useFormik } from "formik"
import { addQuestionOptions } from "./addQuestion"


function QuestionOptions(){

    const questionOptions = useFormik({
        initialValues:{
            quizName: "",
            question:"",
            options:[{answerText:"",isTrue:false}]
        }
    })

    return(
        <FormikProvider value={questionOptions}>
            <form onSubmit={(e)=>{
                e.preventDefault()
                console.log(questionOptions.values)
                addQuestionOptions(questionOptions)
            }}>
            <Field type="text" placeholder="quiz name" name="quizName" required />
            <Field type="text" placeholder="question" name="question" required/>
            <FieldArray name="options">
                {
                    (fieldArrayProps)=>{
                        const {push,remove,form} = fieldArrayProps
                        const {values} = form
                        const {options} = values
                        return <div>
                            {
                            options.map((option,index)=>(
                                <div key={index}>
                                    <Field name={`options[${index}].answerText`} required ></Field>
                                    <Field type="checkbox" name={`options[${index}].isTrue`} ></Field>
                                    {index > 0 && 
                                        <button type="button" onClick={()=> remove(index)}>-</button>
                                    }
                                    <button type="button" onClick={()=> push({answerText:"",isTrue:false})}>+</button>
                                </div>
                            ))
                            }   
                        </div>
                    }
                }
            </FieldArray>
            <button type="submit">submit</button>
            </form>
        </FormikProvider>
        
    )
   
}

export default QuestionOptions