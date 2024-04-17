import React from "react";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { SlCalender } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import './profile.jpg'
import './banner.jpg'
import { IoInformationCircleSharp } from "react-icons/io5";

import { ImFacebook2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { GrYoutube } from "react-icons/gr";
import Dropdown from 'react-bootstrap/Dropdown';
import { Routes, useNavigate, Route } from "react-router-dom";
import './offlinedetails.css'
import Account from "./account";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Onlineticket from "./online-ticket";
import Offlineticket from "./offline-ticket";







function Offlinedetails() {
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

        navigate('/offlineticket')

    }


    return (
        <>
            <Routes>
                <Route path='/offlineticket' element={<Offlineticket />}>

                </Route>
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
            <div className="section">
                <h3 className="create-evvent-title">Create New Event</h3>
                <div className="online-details">
                    <div className="details-chart">
                        <div className="details-title">
                            <IoInformationCircleSharp className="deetails-icon" />Details
                        </div>

                        <div className="details-line"></div>

                        <div className="details-name">
                            <div className="details-name-title">Give your event a name.*</div>
                            <div className="details-name-para">See how your name appears on the event page and a list of all places where your event name will be used. </div>
                            <input type="text" className="details-name-input" placeholder="Enter event name here" />
                            <div className="details-name-line" style={{ borderBottom: "1px solid rgb(233, 231, 231)", marginTop: "30px" }}></div>
                        </div>
                        <div className="details-name">
                            <div className="details-name-title">Choose a category for your event.*</div>
                            <div className="details-name-para">Choosing relevant categories helps to improve the discoverability of your event.  </div>
                            <select name="" id="" className="details-name-select" title="Seect catagory" multiple="" data-selected-text-format="count > 4" data-size="5" data-live-search="true">
                                <option value="01">Arts</option>
                                <option value="02">Business</option>
                                <option value="03">Coaching and Consulting</option>
                                <option value="04">Community and Culture</option>
                                <option value="05">Entrepreneurship</option>
                                <option value="06">Education and Training</option>
                                <option value="07">Family and Friends</option>
                                <option value="08">Fashion and Beauty</option>
                                <option value="09">Film and Entertainment</option>
                                <option value="10">Food and Drink</option>
                                <option value="11">Government and Politics</option>
                                <option value="12">Health and Wellbeing</option>
                                <option value="13">Hobbies and Interest</option>
                                <option value="14">Music and Theater</option>
                                <option value="15">Religion and Spirituality</option>
                                <option value="16">Science and Technology</option>
                                <option value="17">Sports and Fitness</option>
                                <option value="18">Travel and Outdoor</option>
                                <option value="19">Visual Arts</option>
                                <option value="20">Others</option>

                            </select>
                            <div className="details-name-line" style={{ borderBottom: "1px solid rgb(233, 231, 231)", marginTop: "20px" }}></div>
                        </div>

                        <div className="details-name">
                            <div className="details-name-title">When is your event?*</div>
                            <div className="details-name-para">Tell your attendees when your event starts so they can get ready to attend. </div>
                            <div className="details-name-title" style={{ marginTop: "20px" }}>Event Date*</div>
                            <div className="date">
                                <input type="text" className="details-name-date" placeholder="MM//DD//YY" />
                                <input type="text" className="details-name-time" placeholder="Time" />
                                <input type="text" className="details-name-time" placeholder="Duration" />
                            </div>

                            <div className="details-name-line" style={{ borderBottom: "1px solid rgb(233, 231, 231)", marginTop: "30px" }}></div>
                        </div>

                        <div className="details-name">
                            <div className="details-name-title">Please describe your event.</div>
                            <div className="details-name-para">Write a few words below to describe your event and provide any extra information such as schedules, itinerary or any special instructions required to attend your event. </div>



                            <textarea cols="105" rows="6" style={{ marginTop: "20px", border: "1px solid #e3e1e1", borderRadius: "3px" }} className="details-longtext"></textarea>
                            <div className="details-name-line" style={{ borderBottom: "1px solid rgb(233, 231, 231)", marginTop: "30px" }}></div>
                        </div>


                        <div className="details-name" style={{paddingBottom:"35px"}}>
                            <div className="details-name-title">Where is your event taking place? *</div>
                            <div className="details-name-para">Add a venue to your event to tell your attendees where to join the event. </div>
                            <div className="offline-venue-title">Venue</div>
                            <input type="text" className="offline-venue-input" placeholder="" />
                            <div className="offline-address-title">

                                <div className="offline-venue-title">Address Line 1*</div>
                                <div className="offline-venue-title">Address Line 2*</div>

                            </div>
                            <div className="offline-address-details">
                                <input type="text" className="offline-details-input" />
                                <input type="text" className="offline-details-input" />


                            </div>

                            <div className="offline-address-details">

                                <div className="offline-venue-title">Country*</div>
                                <div className="offline-venue-title">State*</div>

                            </div>
                            <div className="offline-address-details">
                                <input type="text" className="offline-details-input" />
                                <input type="text" className="offline-details-input" />


                            </div>


                            <div className="offline-address-details">

                                <div className="offline-venue-title">City/Suburb*</div>
                                <div className="offline-venue-title">Zip/Post Code</div>

                            </div>
                            <div className="offline-address-details" >
                                <input type="text" className="offline-details-input" />
                                <input type="text" className="offline-details-input" />


                            </div>

                        </div>
                    </div>


                </div>
                <div className="details-button-name"><button className="details-button" onClick={navi}>Next</button></div>
            </div>





            <div className="footer-online">
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


export default Offlinedetails;