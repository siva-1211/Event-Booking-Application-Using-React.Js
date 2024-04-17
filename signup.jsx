import React, { useState } from "react";
import './signup.css';
import { Routes, useNavigate,Route } from "react-router-dom";
import Display from "./display";
import Account from "./account";




function Signup(props){
    const [state , setState] = useState(props.state)
    
    console.log("Signup" , state)
  const [firstname , setfirstname] = useState("");
  const [lastname , setlastname] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("")
  const [user , setUser] = useState( [
    
     { id: 1, firstname: "suresh", lastname: 'kumar', email: "suresh@gmail.com" ,password:"suresh2024" },
     { id: 2, firstname: "ramesh", lastname: 'kumar', email: "ramesh@gmail.com", password:"Secur3P@ss!"},
     { id: 3, firstname: "john", lastname: 'doe', email: "john@gmail.com",password:"$tr0ngP@ss"},
     { id: 4, firstname: "alice", lastname: 'smith', email: "alice@gmail.com" ,password:"8#C0mpl3xPwd"},
     { id: 5, firstname: "bob", lastname: 'jones', email: "bob@gmail.com" ,password:"!Safe&Secure#2"},
     { id: 6, firstname: "emma", lastname: 'wilson', email: "emma@gmail.com" ,password:"P@ssphr@se5"},
     { id: 7, firstname: "alex", lastname: 'martinez', email: "alex@gmail.com" ,password:"L0ckD0wn2024"},
     { id: 8, firstname: "lisa", lastname: 'brown', email: "lisa@gmail.com" ,password:"$tr0ngP@ssw0rd"},
     { id: 9, firstname: "kevin", lastname: 'white', email: "kevin@gmail.com",password:"2F@ct0rA#uth!" },
     { id: 10, firstname: "sara", lastname: 'harris', email: "sara@gmail.com",password:"S3cur1ty!Now" }

]);

const navigate =useNavigate();



function adduser(){
    console.log("success")
    

    if(firstname !='' && lastname != '' && email !='' && password != ""){
      let checkmail= user.filter((items) => items.email === email)
      if( checkmail.length === 0){
        const obj={
          id: user.length+1,
          firstname,
          lastname,
          email,
          password
        }

        
        
          user.push(obj)
          
    setState("3")

      }

      else{
        alert("Email already exist")
      }
      
        
      }
      else{
        alert("Fill all details")
      }
      
    }



function navi(){
    setState("4")
}

    return(
        
        <>

        <Routes>
            <Route path='/display' element={<Display user={user}/>}></Route>
            <Route path='/account' element={<Account />}></Route>
        </Routes>

        {
            state == "2" &&
        
        <div className="signup">
                <div className="first-off">
                    <h2 className="title">Event Booking</h2>
                    <img src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/sign_bg.jpg" alt="" style={{ width: "500px", height: "100vh" }} />
                </div>
                <div className="second-off">
                    <div className="new">
                        Already have an account?<span className="color-change" onClick={navi}> Sign In</span>
                    </div>

                    <div className="signin-form">
                        <div className="signin-title">Sign Up to Event Booking</div>
                        <div className="name">
                            <div className="firstname">
                            <p>First Name</p>
                            <input type="email" placeholder="First Name" onChange={(event) => {setfirstname(event.target.value)}}/>
                            </div>

                            <div className="lastname">
                            <p>Last Name</p>
                            <input type="email" placeholder="Last Name" onChange={(event) => {setlastname(event.target.value)}}/>
                            </div>
                            
                        </div>

                        
                        <div className="email">
                            <p>Your Email</p>
                            <input type="email" placeholder="Enter your Email" onChange={(event) => {setEmail(event.target.value)}}/>
                        </div>

                        <div className="email">
                            <p>Password</p>

                            <input type="password" placeholder="Enter your password" onChange={(event) =>{setPassword(event.target.value)}}/>
                        </div>

                        <button type="submit" className="signin-button" onClick={adduser}>Sign Up</button>
                        
                    </div>
                </div>
            </div>
}

{
    state == "3" && <Display user ={user} state={state}/>
}

{
    state == "4" && <Account user ={user} state={state}/>
}
         </>
    )
}

export default Signup;