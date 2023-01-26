import Answers from './answer';
import React,{useState,useEffect} from 'react';

function Question(){

  const [quiz,setQuiz] = useState([])
  const [quizes,setQuizes] = useState([]) 
  const [quizName,setQuizName] = useState("") 
  const [show,setShow] = useState(false)
  
  function showQuiz(quizName){
  fetch(`http://localhost:3001/quiz/${quizName}`).then(response => response.json())
  .then(response => {
    setQuiz(response)
    setShow(true)
    })
  }

     useEffect(()=>{
      fetch("http://localhost:3001/quizes").then(response => response.json())
        .then(response => {
          setQuizes(response)
          })
     },[])
     
     

    return (
      <div>
          {!show &&
            quizes.map(item => {
                   return(
                    <p className="answer" onClick={()=> showQuiz(item.quizName) } key={item._id}>
                        {item.quizName}
                    </p>
                    )
                }
            )
            }
            
        {quiz.length &&
          <div className='mainDiv'>
            <Answers quiz = {quiz}/>
          </div> 
        }
      </div>
    );
}


export default Question