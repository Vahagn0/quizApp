import { useState } from "react"
import { useNavigate } from "react-router-dom";

function LogIn(){

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [show,setShow] = useState(false)
    const navigate = useNavigate();


    function checkPassword(){
        
        if(username === "super"){
            navigate("/super")
        }else{
            fetch(`http://localhost:3001/logIn/${username}`)
            .then((response) => response.json())
            .then((user) => {
                if(user[0] === undefined){
                    setShow(true)
                }else if(user[0].password === password){
                    navigate("/quiz");
                }else{
                    setShow(true)
                }
            })
        }

    }

    return(
        <div className="mainDiv">
            <p className="text">log in</p>
            <form className="signInForm" onSubmit={(e)=>{
                    e.preventDefault()
                    checkPassword()
                }}>
                <input type="text" placeholder="username" className="signUpFormChild" required onChange={(e)=>{
                    setUsername(e.target.value)
                }}></input>
                <input type="password" placeholder="password" className="signUpFormChild" required onChange={(e)=>{
                    setPassword(e.target.value)
                }}></input>
                <button className="signUpFormChild">submit</button>
            </form>
            {show && <p>pls correct your username or pasword</p>}
        </div>
    )
}

export default LogIn