import Answers from './answer';
import React,{useState,useEffect} from 'react';

function Question(){

  const [quiz,setQuiz] = useState([])     

     useEffect(()=>{
      fetch("http://localhost:3001").then(response => response.json())
        .then(response => {
          setQuiz(response)
      })
     },[])

    return (
      <div>
        {quiz.length &&
          <div className='mainDiv'>
            <Answers quiz = {quiz}/>
          </div> 
        }
      </div>
    );
}


export default Question