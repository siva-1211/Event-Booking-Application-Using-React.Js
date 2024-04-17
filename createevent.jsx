import React from "react";
import { useState } from "react";
import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SlCalender } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import './profile.jpg'
import './banner.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { GrYoutube } from "react-icons/gr";
import Dropdown from 'react-bootstrap/Dropdown';
import { Routes, useNavigate, Route } from "react-router-dom";
import './createevent.css'
import Account from "./account";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Onlineevent from "./onlineevent";
import Offlinedetails from "./offlinedetails";







function Createevent() {
    const [state, setState] = useState("1")

    const [active, setActive] = useState("1");
    const handleClick = (event) => {
        setActive(event.target.id);

    }

    const myStyle = {
        backgroundImage:
            "url('https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/banner.jpg')",

        backgroundSize: "cover",
        width: "100%",
        height: "400px",
        padding: "20px 0 80px"

    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };



    const navigate = useNavigate()
    const data = 'hii welcome'

    function navi() {

        setState("2")
    }
    function navi1(){
    
        navigate('/onlineevent')
    
    }
    function navi2(){
    
        navigate('/offlinedetails')
    
    }

    return (
        <>
        <Routes>
            <Route path='/onlineevent' element={<Onlineevent /> }></Route>
            <Route path='/offlinedetails' element={<Offlinedetails /> }></Route>
        </Routes>

            <div className="main">

                <div className="navbars">
                    <div className="heading">Event Booking</div>
                    <div className="content">
                        <div className="navbarmenu">
                            <ul className="navbaritem">
                                <li className="navbaroption" style={{ color: '#6ac045' }}>Home</li>
                                <li className="navbaroption">Explore Events</li>
                                <li className="navbaroption">Pricing</li>
                                <li className="navbaroption">Blog</li>
                                <li className="navbaroption">Help</li>
                                <li className="navbaroption">Pages</li>


                            </ul>
                        </div>
                        <div className="event">
                            <SlCalender className="calender" />
                            <span className="eventname">  Create Event   </span>

                        </div>
                        <Dropdown>
                            <Dropdown.Toggle style={{ background: "white", color: "black", border: "none", marginTop: "6px" }}>
                                <img src={require("./profile.jpg")} alt="" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu">
                                <Dropdown.Item onClick={navi} className="dropdown-image"><img src={require("./profile.jpg")} alt="" /></Dropdown.Item>
                                <Dropdown.Item style={{ borderBottom: "1px solid #E2E3E5" }}></Dropdown.Item>
                                <Dropdown.Item className="dropdown-option">My Profile</Dropdown.Item>
                                <Dropdown.Item className="dropdown-option" onClick={navi}>Sign Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="account">

                        </div>




                    </div>
                </div>

            </div>

            <h3 className="create-event-title">Create New Event</h3>
            <div className="event-type">
                <div className="online-event">
                    <div className="online-inner">
                    <BsCameraVideoFill className="event-icon"/>
                    <div className="event-title">Create an Online Event</div>
                    <div className="event-button" onClick={navi1}>Create Event</div>

                    </div>
                </div>
                <div className="venue-event">
                    <div className="venue-inner">
                    <FaLocationDot className="event-icon"/>
                    <div className="event-title">Create an venue event</div>

                    <div className="event-button" onClick={navi2}>Create Event</div>

                    </div>
                </div>

            </div>
            

            <div className="footer">
                <div className="footer-content">
                    <div className="company">
                        <div className="company-title">Company</div>

                        <ul className="company-list">
                            <li className="company-inner-list">About us</li>
                            <li className="company-inner-list">Help Centre</li>
                            <li className="company-inner-list">FAQ</li>
                            <li className="company-inner-list">Contact us</li>
                        </ul>

                    </div>
                    <div className="useful-links">
                        <div className="company-title">Useful links</div>

                        <ul className="company-list">
                            <li className="company-inner-list">Create event</li>
                            <li className="company-inner-list">Sell Tickects Online</li>
                            <li className="company-inner-list">Privacy Policy</li>
                            <li className="company-inner-list">Terms & Conditions</li>
                        </ul>

                    </div>

                    <div className="resourses">
                        <div className="company-title">Resourses</div>

                        <ul className="company-list">
                            <li className="company-inner-list">Pricing</li>
                            <li className="company-inner-list">Blog</li>
                            <li className="company-inner-list">Refer a Friend</li>

                        </ul>


                    </div>

                    <div className="follow-us">
                        <div className="follow-us-title">Follow Us</div>
                        <div className="follow-social-media">
                            <ImFacebook2 className="social-image" />
                            <IoLogoInstagram className="social-image" />
                            <FaTwitter className="social-image" />
                            <ImLinkedin2 className="social-image" />
                            <GrYoutube className="social-image" />

                        </div>

                        <div className="download-app-title">Download Mobile App</div>
                        <div className="app-image">
                            <img src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/app-store.png" alt="" className="app-iamges" />
                            <img src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/google-play.png" alt="" className="app-iamges" />
                        </div>

                    </div>




                </div>

                <div className="footer-bottom">
                    <div className="bottom-line" style={{ borderBottom: "1px solid rgba(255, 255, 255, .1)", marginTop: "80px" }}></div>

                    <div className="copyright">© 2024, <strong>Event Booking</strong>. All rights reserved. Powered by ABCD</div>
                </div>
            </div>








        </>
    )
}


export default Createevent;