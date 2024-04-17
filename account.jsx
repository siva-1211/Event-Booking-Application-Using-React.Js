import React, { useState } from "react";
import './account.css';
import Signup from './signup';
import Homepage from './homepage'
import { Routes, useNavigate,Route } from "react-router-dom";




function Account(props) {

   
   const [state , setState] = useState(props.state)
   
   console.log("account page" , state)

    const navigate =useNavigate()

    function navi(){
        
        setState("3")
    
    }

    
    return (
        <>
        <Routes>
        <Route path='/signup' element={<Signup />}></Route>

        </Routes>
        {
            state == "4" && 
        
            <div className="signup">
                <div className="first-off">
                    <h2 className="title">Event Booking</h2>
                    <img src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/sign_bg.jpg" alt="" style={{ width: "500px", height: "100vh" }} />
                </div>
                <div className="second-off">
                    <div className="new">
                        New to Event Booking ?<span className="color-change" onClick={navi}> Sign up</span>
                    </div>

                    <div className="signin-form">
                        <div className="signin-title">Sign In to Event Booking</div>
                        <div className="email">
                            <p>Your Email</p>
                            <input type="email" placeholder="Enter your Email" />
                        </div>

                        <div className="email">
                            <p>Password</p>

                            <input type="password" placeholder="Enter your password" />
                        </div>

                        <button type="submit" className="signin-button" >Signin In</button>
                        
                    </div>
                </div>
            </div>
}
            {/* {
                state == "3" && <Signup state = {state}/>
            } */}
        </>
    )
}


export default Account;