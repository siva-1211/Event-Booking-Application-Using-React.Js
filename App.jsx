
import React, {createContext, useEffect, useState} from 'react';
import { Routes, useNavigate,Route } from "react-router-dom";
import Facebook from './facebook';
import Api from './api';
import Card from './card';
import View from './view';
import Homepage from './homepage'
import Account from './account';
import Home from './home';
import {Input, Button, Modal} from 'antd';
import Signup from './signup';
import Display from './display';
import Createevent from './createevent';
import Onlineevent from './onlineevent';
import Onlineticket from './online-ticket';
import Onlinesetting from './online-setting';
import Offlinedetails from './offlinedetails';
import Offlineticket from './offline-ticket';


export const context = createContext() 

function Main() {
  const navigate =useNavigate()
 
 
const [color,setColor] = useState(["apple","red","green"])
 

useEffect(() =>{
  navigate('/homepage')
 
 },[])

 



return(
  <>
<context.Provider value={color}>

</context.Provider>
  
 <Routes>
        
        {/* <Route path='/view' element={<View />}></Route> */}
        <Route path='/display' element={<Display />}></Route>
        <Route path='/facebook' element={<Facebook />}></Route>
        <Route path='/api' element={<Api />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/createevent' element={<Createevent />}></Route>
<Route path='/onlineevent' element={<Onlineevent /> }></Route>
<Route path='/onlinesetting' element={<Onlinesetting /> }></Route>
<Route path='/onlineticket' element={<Onlineticket /> }></Route>
<Route path='/offlinedetails' element={<Offlinedetails /> }></Route>
<Route path='/offlineticket' element={<Offlineticket /> }></Route>
<Route path='/display' element={<Display /> }></Route>
<Route path='/card' element={<Card /> }></Route>




        <Route path='/homepage' element={<Homepage />}></Route>
    </Routes>
    
  </>
)
}

export default Main;


