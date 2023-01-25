import { useState } from "react"
import { redirect, useNavigate } from "react-router-dom"

function SignUp(){

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [show,setShow] = useState(false)
    const navigate = useNavigate()

    function createUser(){
        fetch(`http://localhost:3001/logIn/${username}`)
            .then((response) => response.json())
            .then((user) => {
                console.log(user,"userrr")
                if(user.length > 0){
                    setShow(true)
                }else{
                    fetch("http://localhost:3001/",
                        {
                            headers: {
                            'Content-Type': 'application/json'
                            },
                            method: "POST",
                            body: JSON.stringify({
                                username: username,
                                password: password
                            })
                        })
                        .then(function(){navigate("logIn")})
                        .catch(function(res){ console.log(res) })

                }
            })
    }

    return(
        <div className="mainDiv">
            <p className="text">sign up</p>
            <form className="signUpForm" onSubmit={(e)=>{
                    e.preventDefault()
                    createUser()
                }}>
                <input type="text" placeholder="username" className="signUpFormChild" required onChange={(e)=>{
                    setUsername(e.target.value)
                }}></input>
                <input type="password" placeholder="password" className="signUpFormChild" required onChange={(e)=>{
                    setPassword(e.target.value)
                    console.log(password)
                }}></input>
                <button className="signUpFormChild">submit</button>
            </form>
            <button className="haveAccountButton" onClick={()=> navigate("/logIn")}>already have an account</button>
            {show && <p>that username is taken</p>}
        </div>
    )
}

export default SignUp