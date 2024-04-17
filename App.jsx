/*import React from "react";
import { useState } from "react";
import Home from './home';
import View from './view';



function App(){
 const [change ,setChange] = useState(true);
 
   const [user , setUser] = useState( [
     { id: 1, firstname: "suresh", lastname: 'kumar', email: "suresh@gmail.com" },
     { id: 2, firstname: "ramesh", lastname: 'kumar', email: "ramesh@gmail.com" },
     { id: 3, firstname: "john", lastname: 'doe', email: "john@gmail.com" },
     { id: 4, firstname: "alice", lastname: 'smith', email: "alice@gmail.com" },
     { id: 5, firstname: "bob", lastname: 'jones', email: "bob@gmail.com" },
     { id: 6, firstname: "emma", lastname: 'wilson', email: "emma@gmail.com" },
     { id: 7, firstname: "alex", lastname: 'martinez', email: "alex@gmail.com" },
     { id: 8, firstname: "lisa", lastname: 'brown', email: "lisa@gmail.com" },
     { id: 9, firstname: "kevin", lastname: 'white', email: "kevin@gmail.com" },
     { id: 10, firstname: "sara", lastname: 'harris', email: "sara@gmail.com" }
 ]);


 

  return(
    <>
{
  change === true ? <Home /> :
    <View  dvd={user}/>
}
<button type="submit" onClick={() =>{setChange(!change)}}>changestate</button>
    </>
  )
}

export default App;

import React, { useState } from "react"
import { Input, Button, Modal, Empty, Rate } from 'antd';
import axios from "axios";
import'./App.css';




function App() {

  const [apiData, setApiData] = useState(null)

  async function getProducts () {
    try {
     const result = await axios.get('https://fakestoreapi.com/products')
     if (result && result.data) {
       setApiData(result?.data)
     }

    } catch(error) {
      console.log("errororororzdbfsdbjfsd", error)
    }
  }


  return (
    <>
      <Button onClick={() =>  getProducts()} >Get data</Button>
      {apiData && <div className="items">
        {apiData.map((items, index) => {
          console.log(items)
          return (
            <>
           
              <div className="arrange">
            <div className="category">{items.category}</div>
            
            <div className="image" ><img   src={items.image} height={250} width={200} /></div>
            <div className="description">{items.description}</div>
            <div className="price">Rs.{items.price} /-</div>
            <Rate  className="rating" value={items.rating.rate} disabled />
            </div>
            
            </>
          )
        })}

      </div>}

      {apiData === null && <Empty />}
    </>
  )
}

export default App;*/


/*import React, { useEffect, useState } from "react"
import { Input, Button, Modal, Empty, Rate } from 'antd';
import axios from "axios";
import Home from "./home";
import Card from "./card";
import'./App.css';
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Facebook from "./facebook";
import { useDispatch, useSelector } from "react-redux";
import Display from "./display";

function App(){
 
 const msg=useSelector((state) => state.msg)
 //console.log(msg)
 
 const navigate= useNavigate();
 
 const dispatchEvent = useDispatch()
 
 function change3(){
  dispatchEvent({
   type: "CHANGE_MSG",
   data: "hii"
  })
 }
function change(){
  
}

function change2(){
  console.log("fr")
  dispatchEvent({
   type: "CHANGE_ARRAY",
   data: "second String"
  })
 }

 useEffect( ()=> {
  navigate('/home')
 

 },[])

  return(
    <>

 

    <Routes>

      <Route path = "/display" element={<Display />} />
      <Route path = "/card" element={<Card />} />
      <Route path = "/home" element={<Home />} />

    </Routes>
    </>
  )
}

export default App;*/


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


/*import React, {useState} from 'react';
import logo from './logo.svg';
import Home from './home';
import Facebook from './facebook';
import './App.css';
import {Input, Button, Modal} from 'antd';


function Main() {
  const [firstName , setFirstname] = useState("");
  const [lastName , setLasttname] = useState("");
  const [email , setEmail] = useState("");
  const [isModalOpen , setIsModalOpen] = useState(false);
  const[isModalDelete, setIsModalDelete] =useState(false);
  const [user , setUser] = useState( [
    { id: 1, firstName: "suresh", lastName: 'kumar', email: "suresh@gmail.com" },
    { id: 2, firstName: "ramesh", lastName: 'kumar', email: "ramesh@gmail.com" },
    { id: 3, firstName: "john", lastName: 'doe', email: "john@gmail.com" },
    { id: 4, firstName: "alice", lastName: 'smith', email: "alice@gmail.com" },
    { id: 5, firstName: "bob", lastName: 'jones', email: "bob@gmail.com" },
    { id: 6, firstName: "emma", lastName: 'wilson', email: "emma@gmail.com" },
    { id: 7, firstName: "alex", lastName: 'martinez', email: "alex@gmail.com" },
    { id: 8, firstName: "lisa", lastName: 'brown', email: "lisa@gmail.com" },
    { id: 9, firstName: "kevin", lastName: 'white', email: "kevin@gmail.com" },
    { id: 10, firstName: "sara", lastName: 'harris', email: "sara@gmail.com" }
]);
const [editedData, setEditedData] = useState({
  firstName: '',
  lastName : "",
  email: ""
});
const [deleteddata, setDeleteddata] =useState();



  function adduser(){
    if(firstName !='' && lastName != '' && email !=''){
      let checkmail= user.filter((items) => items.email === email)
      if( checkmail.length === 0){
        const obj={
          id: user.length+1,
          firstName,
          lastName,
          email
        }
        
          setUser([...user,obj])

      }
      
        
      }
      
    }
    function onEdit(selectedData ,index){
      setEditedData(selectedData)

      setIsModalOpen(true)
      console.log(editedData)

    }

    function onOk () {
      setUser(
        user.map((items) => {
          if (items.id === editedData.id) {
            return editedData
          } else {
            return items
          }
        })
  
      )
      setIsModalOpen(false)
    }
  
  function onDelete(id){
    console.log(id)
    const newuser = user.filter( li => li.id !== id)
    setUser(newuser)
    console.log(newuser)


  }

  function deletedata(){
    

  }
    
   


  

  
  
  

  return (
    <>
    
   <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100vh",alignItems:"center"}}>
    <input type="text" placeholder='firstname' onChange={(event) => {setFirstname(event.target.value)}}/>
    <input type="text" placeholder='lastname' onChange={(event) => {setLasttname(event.target.value)}}/>
    <input type="text" placeholder='email'onChange={(event) => {setEmail(event.target.value)}}/>
    <button type='submit' style={{height:"25px", width:"100px"}} onClick={() => adduser()}> submit</button>
   <div style={{width:"100%", display:"flex", alignItems:"center", marginTop:"10px" ,flexWrap:"wrap"}}>

   {
    user.map((data,index) => {
      return (
        <>
        <div style={{background:"", width:"150px",margin:"10px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
        <div>{data?.id}
        </div>
        <div>{data?.firstName}
        </div>
        <div>{data?.lastName}
        </div>
        <div>{data?.email}
        </div>
        <button onClick={() => onEdit(data,index)}>edit</button>
        <button onClick={() => onDelete(data.id)}>delete</button>
        </div>
        </>
      )
    })
   }
   </div>
   </div>
   <Modal title="Basic Modal" open={isModalOpen} onOk={() => onOk()} onCancel={() => setIsModalOpen(false)}>
   <div>
   First name: <Input   value={editedData.firstName} onChange={(e) => {setEditedData({...editedData, firstName: e.target.value})}}  />
          Last name: <Input  value={editedData.lastName} onChange={(e) => setEditedData({...editedData, lastName: e.target.value})} />
          Email : <Input  value={editedData.email} onChange={(e) => setEditedData({...editedData, email: e.target.value})} />

        </div>

      </Modal>

      
    </>


  )
  

}

export default Main;*/