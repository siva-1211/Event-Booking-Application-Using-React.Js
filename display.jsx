// import React, { useEffect, useState } from "react"
// import { Input, Button, Modal, Empty, Rate } from 'antd';
// import axios from "axios";
// import { Route, Router, Routes, useNavigate } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import Home from "./home";


// function Display(props){



//     const Array=useSelector((state) => state.Array);
// const [testArray,setTestArray] = useState(Array)
// console.log(testArray)
// const [editedData ,setEditedData] = useState({
//     firstname: '',
//     lastname : "",
//     email: ""
//   });

// const [isModalOpen,setIsModalOpen] = useState(false)
// const [deletemodal,setDeletemodal] = useState(false)
// const [deletedid,setDeletedid] = useState()

// const navigate= useNavigate()
// const dispatchEvent= useDispatch()

// function change(){
//     navigate('/home')
// }


// function onEdit(selectedData ,index){
//     setEditedData(selectedData)

//     setIsModalOpen(true)


//   }


//   function onOk () {
//     setTestArray(
//           testArray.map((items) => {
//         if (items.id === editedData.id) {
//             console.log(items)
//           return editedData
//         } else {
//           return items
//         }
//       })
//     )
//     console.log(testArray)
//     Array = testArray
//     setIsModalOpen(false)
//   }


//   function onDelete(id){
//     setDeletedid(id)
//     setDeletemodal(true)

//   }

//   function deletedata(){
//     const newdata= testArray.filter((item) => item.id != deletedid)
//     setTestArray(newdata)
//     setDeletemodal(false)

//   }


//     return(
//         <>
//         <h1>Display Page</h1>
//         <button type="submit" onClick={change}>Home</button>
//         <table className="table">
//             <thead>
//                 <th>ID</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 <th>Operations</th>
//             </thead>


//             <tbody>
//             {
//                 testArray.map((item,index) =>(
//                     <tr>
//                     <td>{item.id}</td>
//                     <td>{item.firstname}</td>
//                     <td>{item.lastname}</td>
//                     <td>{item.email}</td>
//                     <td>
//                         <button onClick={() => onEdit(item,index)}>Edit</button>
//                         <button onClick={() => onDelete(item.id)}>Delete</button>
//                     </td>


//                 </tr>

//                 ))
//             }



//             </tbody>

//         </table>

//         <Modal title="Basic Modal" open={isModalOpen} onOk={() => onOk()} onCancel={() => setIsModalOpen(false)}>
//    <div>
//           First name: <Input   value={editedData.firstname} onChange={(e) => {setEditedData({...editedData, firstname: e.target.value})}}  />
//           Last name: <Input  value={editedData.lastname} onChange={(e) => setEditedData({...editedData, lastname: e.target.value})} />
//           Email : <Input  value={editedData.email} onChange={(e) => setEditedData({...editedData, email: e.target.value})} />

//         </div>

//       </Modal>

//   <Modal title="Confirm Deletion" open={deletemodal} onOk={() => deletedata()} onCancel={() => {setDeletemodal(false)}}>


//   </Modal>


//         <Routes>
//             <Route path={'/home'} element={<Home />}>

//             </Route>
//         </Routes>
//         </>
//     )
// }

// export default Display;


import React, { useEffect, useState } from "react"
import { Input, Button, Modal, Empty, Rate } from 'antd';
import axios from "axios";
import './display.css'
import { Route, Routes, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";



function Display(props) {
    const [state, setState] = useState(props.state)

    console.log("Dv")
    const [user, setUser] = useState(props.user)
    console.log("display page", user)
    //const[data , setData] = useState(props.user)

    const [editedData, setEditedData] = useState({
        firstname: '',
        lastname: "",
        email: "",
        password: ""
    });

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [deletemodal, setDeletemodal] = useState(false)
    const [deletedid, setDeletedid] = useState()

    const navigate = useNavigate()




    function onEdit(selectedData, index) {
        setEditedData(selectedData)

        setIsModalOpen(true)


    }
    function onOk() {
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

    function onDelete(id) {
        setDeletedid(id)
        setDeletemodal(true)

    }

    function deletedata() {
        const newdata = user.filter((item) => item.id != deletedid)
        setUser(newdata)
        setDeletemodal(false)

    }
    function navi() {
        setState("3")

    }





    return (
        <>
            <div className="display">
                <div className="first-off">
                    <h2 className="title">Event Booking</h2>

                    <img src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/sign_bg.jpg" alt="" style={{ width: "300px", height: "100vh" }} />
                </div>
                
                <div className="data">
               
                    <div className="table-data">
                        <table className="table">
                            <thead>
                                <th className="table-id">ID</th>
                                <th className="table-firstname" style={{fontWeight:"bold"}}> First Name</th>
                                <th className="table-lastname">Last Name</th>
                                <th className="table-email">Email</th>
                                <th className="table-password">Password</th>
                                <th className="table-operation">Operations</th>
                            </thead>


                            <tbody>
                                {
                                    user.map((item, index) => (
                                        <tr>
                                            <td className="table-id">{item.id}</td>
                                            <td className="table-firstname">{item.firstname}</td>
                                            <td className="table-lastname">{item.lastname}</td>
                                            <td className="table-email">{item.email}</td>
                                            <td className="table-password">{item.password}</td>
                                            <td className="table-operation">
                                                <button onClick={() => onEdit(item, index)} style={{marginLeftt:"10px"}}>Edit</button>
                                                <button onClick={() => onDelete(item.id)}>Delete</button>
                                            </td>


                                        </tr>

                                    ))
                                }



                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={() => onOk()} onCancel={() => setIsModalOpen(false)}>
                <div>
                    First name: <Input value={editedData.firstname} onChange={(e) => { setEditedData({ ...editedData, firstname: e.target.value }) }} />
                    Last name: <Input value={editedData.lastname} onChange={(e) => setEditedData({ ...editedData, lastname: e.target.value })} />
                    Email : <Input value={editedData.email} onChange={(e) => setEditedData({ ...editedData, email: e.target.value })} />
                    Password : <Input value={editedData.password} onChange={(e) => setEditedData({ ...editedData, password: e.target.value })} />

                </div>

            </Modal>

            <Modal title="Confirm Deletion" open={deletemodal} onOk={() => deletedata()} onCancel={() => { setDeletemodal(false) }}>


            </Modal>


        </>
    )
}

export default Display;