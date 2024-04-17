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
import Facebook from "./facebook";
import Account from "./account";
import Createevent from "./createevent";
import Onlineevent from "./onlineevent";
import Signup from "./signup";



let count = 0;

function Homepage() {
    const [state, setState] = useState("1")
    console.log("ashhhh")

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

    //     const step1 = document.querySelector('.star-event-step1')
    //     const step2 = document.querySelector('.star-event-step2')
    //     const step3 = document.querySelector('.star-event-step3')
    //     const step4 = document.querySelector('.star-event-step4')
    //     // // console.log(step1.style)

    //     if(step1){
    //     step1.addEventListener('click' , () =>{
    //         step1.style.backgroundColor='#6ac045';
    //         step1.style.color='white';
    //         step2.style.backgroundColor='white';
    //         step3.style.backgroundColor='white';
    //         step4.style.backgroundColor='white';
    //         step2.style.color='black';
    //         step3.style.color='black';
    //         step4.style.color='black';


    //     })
    // }

    // if(step2){
    //     step2.addEventListener('click' , () =>{
    //         step2.style.backgroundColor='#6ac045';
    //         step2.style.color='white';
    //         step1.style.backgroundColor='white';
    //         step3.style.backgroundColor='white';
    //         step4.style.backgroundColor='white';
    //         step1.style.color='black';
    //         step3.style.color='black';
    //         step4.style.color='black';
    //     })
    // }

    // if(step3){
    //     step3.addEventListener('click' , () =>{
    //         step3.style.backgroundColor='#6ac045';
    //         step3.style.color='white';
    //         step1.style.backgroundColor='white';
    //         step2.style.backgroundColor='white';
    //         step4.style.backgroundColor='white';
    //         step1.style.color='black';
    //         step2.style.color='black';
    //         step4.style.color='black';
    //     })
    // }

    // if(step4){
    //     step4.addEventListener('click' , () =>{
    //         step4.style.backgroundColor='#6ac045';
    //         step4.style.color='white';
    //         step2.style.backgroundColor='white';
    //         step3.style.backgroundColor='white';
    //         step1.style.backgroundColor='white';
    //         step2.style.color='black';
    //         step3.style.color='black';
    //         step1.style.color='black';
    //     })
    // }

    const navigate = useNavigate()
    const data = 'hii welcome'

    function navi() {
        navigate('/createevent')

    }

    function navi1() {

        setState("2")

    }

    function countInc() {
        count++;
    }


    return (
        <>
            <Routes>
                <Route path='/createevent' element={<Createevent />}></Route>
                <Route path='/onlineEvent' element={<Onlineevent />}></Route>
            </Routes>
            {state == "1" &&
                <div>
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
                                    <span className="eventname" onClick={navi}>  Create Event   </span>

                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle style={{ background: "white", color: "black", border: "none", marginTop: "6px" }}>
                                        <img src={require("./profile.jpg")} alt="" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu">
                                        <Dropdown.Item onClick={navi} className="dropdown-image"><img src={require("./profile.jpg")} alt="" /></Dropdown.Item>
                                        <Dropdown.Item style={{ borderBottom: "1px solid #E2E3E5" }}></Dropdown.Item>
                                        <Dropdown.Item className="dropdown-option">My Profile</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-option" onClick={navi1}>Sign Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="account">

                                </div>




                            </div>
                        </div>

                    </div>

                    <div className="wrapper">

                        <div className="background" style={myStyle}>

                            <div className="bannercontent">
                                <div className="bannertitle">The Easiest and Most Powerful Online Event Booking and Ticketing System</div>
                                <div className="bannerpara">Barren is an all-in-one event ticketing platform for event organisers, promoters, and managers. Easily create, promote and manage your events of any type and size.</div>
                                <div className="createevent"><button className="eventbutton" onClick={navi}>Create Event <FaArrowRight style={{ marginLeft: "7px" }} /> </button></div>
                            </div>



                        </div>
                    </div>

                    <div className="exploreevent">
                        <div className="exploreeventtitle">
                            Explore Events

                        </div>
                        <div className="explore-event-period">
                            <a className="event-period" href="" >All</a>
                            <a className="event-period" href="">Today</a>
                            <a className="event-period" href="">Tomorrow</a>
                            <a className="event-period" href="">This Week</a>
                            <a className="event-period" href="">This Weekend</a>
                            <a className="event-period" href="">Next Week</a>
                            <a className="event-period" href="">Next Weekend</a>
                            <a className="event-period" href="">This Month</a>
                            <a className="event-period" href="">Next Month</a>
                            <a className="event-period" href="">This Year</a>
                            <a className="event-period" href="">Next Year</a>
                        </div>

                        <div className="explore-event-catogary">
                            <button type="button" class="event-catogary" data-filter="all">All</button>
                            <button type="button" class="event-catogary" data-filter=".arts">Arts</button>
                            <button type="button" class="event-catogary" data-filter=".business">Business</button>
                            <button type="button" class="event-catogary" data-filter=".concert">Concert</button>
                            <button type="button" class="event-catogary" data-filter=".workshops">Workshops</button>
                            <button type="button" class="event-catogary" data-filter=".coaching_consulting">Coaching and Consulting</button>
                            <button type="button" class="event-catogary" data-filter=".health_Wellness">Health and Wellbeing</button>
                            <button type="button" class="event-catogary" data-filter=".volunteer">Volunteer</button>
                            <button type="button" class="event-catogary" data-filter=".sports">Sports</button>
                            <button type="button" class="event-catogary" data-filter=".free">Free</button>
                        </div>
                        <div className="content-card">
                            <div className="main-card">
                                <img className="card-image" src={require("./img-1.jpg")} alt="" />
                                <div className="card-title">A New way Of Life</div>
                                <div className="card-price">AUD $41.50*</div>
                                <div className="card-date">15 Apr  Fri, 3.45 PM</div>

                            </div>

                            <div className="main-card">
                                <img className="card-image" src={require("./img-2.jpg")} alt="" />
                                <div className="card-title">A New way Of Life</div>
                                <div className="card-price">AUD $41.50*</div>
                                <div className="card-date">15 Apr  Fri, 3.45 PM</div>

                            </div>

                            <div className="main-card">
                                <img className="card-image" src={require("./img-3.jpg")} alt="" />
                                <div className="card-title">A New way Of Life</div>
                                <div className="card-price">AUD $41.50*</div>
                                <div className="card-date">15 Apr  Fri, 3.45 PM</div>

                            </div>

                            <div className="main-card">
                                <img className="card-image" src={require("./img-4.jpg")} alt="" />
                                <div className="card-title">A New way Of Life</div>
                                <div className="card-price">AUD $41.50*</div>
                                <div className="card-date">15 Apr  Fri, 3.45 PM</div>

                            </div>

                            <div className="main-card">
                                <img className="card-image" src={require("./img-5.jpg")} alt="" />
                                <div className="card-title">A New way Of Life</div>
                                <div className="card-price">AUD $41.50*</div>
                                <div className="card-date">15 Apr  Fri, 3.45 PM</div>

                            </div>

                            <div className="main-card">
                                <img className="card-image" src={require("./img-6.jpg")} alt="" />
                                <div className="card-title">A New way Of Life</div>
                                <div className="card-price">AUD $41.50*</div>
                                <div className="card-date">15 Apr  Fri, 3.45 PM</div>

                            </div>

                            <div className="main-card">
                                <img className="card-image" src={require("./img-7.jpg")} alt="" />
                                <div className="card-title">A New way Of Life</div>
                                <div className="card-price">AUD $41.50*</div>
                                <div className="card-date">15 Apr  Fri, 3.45 PM</div>

                            </div>

                            <div className="main-card">
                                <img className="card-image" src={require("./img-8.jpg")} alt="" />
                                <div className="card-title">A New way Of Life</div>
                                <div className="card-price">AUD $41.50*</div>
                                <div className="card-date">15 Apr  Fri, 3.45 PM</div>

                            </div>


                        </div>


                        <div className="browse-all"><button className="browse-button">Browse All</button></div>

                    </div>

                    <div className="hosting">
                        <div className="host-title">Host Engaging Online and Venue Events with Barren</div>
                        <div className="host-para">Organise venue events and host online events with unlimited possibilities using our built-in virtual event platform. Build a unique event experience for you and your attendees.</div>
                    </div>


                    <div className="owl-carousel">
                        <Slider {...settings}>
                            <div className="main-carousel">
                                <div className="owl-carousel-image">
                                    <img src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/icons/webinar.png" alt="" />

                                </div>
                                <div className="owl-carousel-title">Webinar</div>

                                <div className="owl-carousel-para">Webinars tend to be one-way events. Barren helps to make them more engaging.
                                </div>
                            </div>

                            <div className="main-carousel">
                                <div className="owl-carousel-image">
                                    <img src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/icons/training-workshop.png" alt="" />

                                </div>
                                <div className="owl-carousel-title">Training & Workshop </div>

                                <div className="owl-carousel-para">Create and host profitable workshops and training sessions online, sell tickets and earn money.
                                </div>
                            </div>

                            <div className="main-carousel">
                                <div className="owl-carousel-image">
                                    <img src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/icons/online-class.png" alt="" />

                                </div>
                                <div className="owl-carousel-title">Online Class</div>

                                <div className="owl-carousel-para">Try our e-learning template to create a fantastic e-learning event page and drive engagement.
                                </div>
                            </div>

                            <div className="main-carousel">
                                <div className="owl-carousel-image">
                                    <img src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/icons/talk-show.png" alt="" />

                                </div>
                                <div className="owl-carousel-title">Talk Show</div>

                                <div className="owl-carousel-para">Use our intuitive built-in event template to create and host an engaging Talk Show.
                                </div>
                            </div>

                            <div className="main-carousel">
                                <div className="owl-carousel-image">
                                    <img src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/icons/venue-events.png" alt="" />

                                </div>
                                <div className="owl-carousel-title">Venue Events</div>

                                <div className="owl-carousel-para">Create outstanding event page for your venue events, attract attendees and sell more tickets.
                                </div>



                            </div>
                        </Slider>

                    </div>

                    <div className="star-event">
                        <div className="star-event-title">Be a Star Event Host in 4 Easy Steps</div>

                        <div className="star-event-para">Use early-bird discounts, coupons and group ticketing to double your ticket sale. Get paid quickly and securely.</div>

                        <div className="star-event-button">
                            <button key={1}
                                className={active === "1" ? "star-event-step" : "star-event-step1"}
                                id={"1"}
                                onClick={handleClick}>Step 01
                                <span className="star-event-content">Create Your Event</span>
                            </button>
                            <button className={active === "2" ? "star-event-step" : "star-event-step1"}
                                id={"2"}
                                onClick={handleClick} >Step 02
                                <span className="star-event-content">Sell Tickets and  Get Paid</span>
                            </button>
                            <button className={active === "3" ? "star-event-step" : "star-event-step1"}
                                id={"3"}
                                onClick={handleClick}>Step 03
                                <span className="star-event-content">Finally, Host Your  Event</span>
                            </button>
                            <button className={active === "4" ? "star-event-step" : "star-event-step1"}
                                id={"4"}
                                onClick={handleClick} >Step 04
                                <span className="star-event-content">Repeat and Grow</span>
                            </button>



                        </div>

                        {
                            active == '1' &&
                            <div className="step1-content">
                                <div className="step1-text">Sign up for free and create your event easily in minutes.</div>
                                <div className="step1-subcontent">
                                    <div className="step1-content1">
                                        <div className="step1-image">
                                            <img src={require("./step-icon-1.png")} alt="" />


                                        </div>
                                        <div className="step1-title">Sign up for free</div>
                                        <div className="step1-para">Sign up easily using your Google or Facebook account or email and create your events in minutes.</div>
                                    </div>

                                    <div className="step1-content1">
                                        <div className="step1-image">
                                            <img src={require("./step-icon-2.png")} alt="" />

                                        </div>
                                        <div className="step1-title">Use built-in event page template</div>
                                        <div className="step1-para">Choose from our customised page templates specially designed to attract attendees.</div>
                                    </div>

                                    <div className="step1-content1">
                                        <div className="step1-image">
                                            <img src={require("./step-icon-3.png")} alt="" />


                                        </div>
                                        <div className="step1-title">Customise your event page as you like</div>
                                        <div className="step1-para">Add logo, collage hero images, and add details to create an outstanding event page.</div>
                                    </div>
                                </div>
                            </div>

                        }

                        {
                            active == '2' && <div className="step1-content">
                                <div className="step1-text">Use our multiple ticketing features & marketing automation tools to boost ticket sales.</div>
                                <div className="step1-subcontent">
                                    <div className="step1-content1">
                                        <div className="step1-image">
                                            <img src={require("./step-icon-4.png")} alt="" />


                                        </div>
                                        <div className="step1-title">Promote your events on social media & email</div>
                                        <div className="step1-para">Use our intuitive event promotion tools to reach your target audience and sell tickets.</div>
                                    </div>

                                    <div className="step1-content1">
                                        <div className="step1-image">
                                            <img src={require("./step-icon-5.png")} alt="" />

                                        </div>
                                        <div className="step1-title">Use early-bird discounts, coupons & group ticketing</div>
                                        <div className="step1-para">Double your ticket sales using our built-in discounts, coupons and group ticketing features.</div>
                                    </div>

                                    <div className="step1-content1">
                                        <div className="step1-image">
                                            <img src={require("./step-icon-6.png")} alt="" />


                                        </div>
                                        <div className="step1-title">Get paid quickly & securely</div>
                                        <div className="step1-para">Use our PCI compliant payment gateways to collect your payment securely.</div>
                                    </div>
                                </div>
                            </div>
                        }


                        {
                            active == '3' && <div className="step1-content">
                                <div className="step1-text">Use Barren to host any types of online events for free.</div>
                                <div className="step1-subcontent">
                                    <div className="step1-content1">
                                        <div className="step1-image">
                                            <img src={require("./step-icon-7.png")} alt="" />


                                        </div>
                                        <div className="step1-title">Free event hosting</div>
                                        <div className="step1-para">Use Eventbookings to host any types of online events for free.</div>
                                    </div>

                                    <div className="step1-content1">
                                        <div className="step1-image">
                                            <img src={require("./step-icon-8.png")} alt="" />

                                        </div>
                                        <div className="step1-title">Built-in video conferencing platform</div>
                                        <div className="step1-para">No need to integrate with ZOOM or other 3rd party apps, use our built-in video conferencing platform for your events.</div>
                                    </div>

                                    <div className="step1-content1">
                                        <div className="step1-image">
                                            <img src={require("./step-icon-9.png")} alt="" />


                                        </div>
                                        <div className="step1-title">Connect your attendees with your event</div>
                                        <div className="step1-para">Use our live engagement tools to connect with attendees during the event.</div>
                                    </div>
                                </div>
                            </div>

                        }


                        {
                            active == '4' && <div className="step1-content">
                                <div className="step1-text">Create more events and earn more money.</div>
                                <div className="step1-subcontent">
                                    <div className="step1-content1">
                                        <div className="step1-image">
                                            <img src={require("./step-icon-10.png")} alt="" />


                                        </div>
                                        <div className="step1-title">Create multiple sessions & earn more</div>
                                        <div className="step1-para">Use our event scheduling features to create multiple sessions for your events & earn more money.</div>
                                    </div>

                                    <div className="step1-content1">
                                        <div className="step1-image">
                                            <img src={require("./step-icon-11.png")} alt="" />

                                        </div>
                                        <div className="step1-title">Clone past event to create similar events</div>
                                        <div className="step1-para">Use our event cloning feature to clone past event and create a new one easily within a few clicks.</div>
                                    </div>

                                    <div className="step1-content1">
                                        <div className="step1-image">
                                            <img src={require("./step-icon-12.png")} alt="" />


                                        </div>
                                        <div className="step1-title">Get support like nowhere else</div>
                                        <div className="step1-para">Our dedicated on-boarding coach will assist you in becoming an expert in no time.</div>
                                    </div>
                                </div>
                            </div>
                        }
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
                </div>
            }

            {
                state == "2" && <Signup state={state} />
            }







        </>
    )
}


export default Homepage;