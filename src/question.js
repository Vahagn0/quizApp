import Answers from './answer';
import React,{useState,useEffect} from 'react';

function Question(){

  const [questions,setQuestions] = useState([])     

     useEffect(()=>{
      fetch("http://localhost:3001").then(response => response.json())
        .then(response => {
          setQuestions(response)
      })
     },[])

    return (
      <div>
        {questions.length &&
          <div className='mainDiv'>
            <Answers questions = {questions}/>
          </div> 
        }
      </div>
    );
}


export default Question