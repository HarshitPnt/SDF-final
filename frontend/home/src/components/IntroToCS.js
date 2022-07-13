import React from 'react';
import './Course.css'
import { Link } from "react-router-dom";

function IntroToCS () {
    return(
        <div className='App'>
            <div className='App-header'>
            <div id="Heading">
                <h1>Online Education Management System - IITH</h1>
                <h2>Learn More!</h2>
            </div>
            <div id="buttons">
                <button>Log-in</button>
                <button>Sign-Up</button>
            </div>
            <div id="Nav-bar">
                <ul>
                    <li><a href="http://192.168.51.89:3000/#Home">Home</a></li>
                    <li><a href="http://192.168.51.89:3000/#Courses">Courses</a></li>
                    <li><a href="http://192.168.51.89:3000/#About">About Us</a></li>
                    <li><a href="http://192.168.51.89:3000/#Contact">Contact</a></li>
                </ul>
            </div>
            </div>
            <div className='course-card-big'>
                <div className='course-info'>
                    <div className='course-img'>
                        <img src={process.env.PUBLIC_URL+'images/Intro_to_CS'} />
                    </div>
                    <div className='course-data'>
                        <div className='course-discription'>
                            <h2>Discription</h2>
                            <p>This course deals with, What Computer Science is all about<br />
                                    History<br />
                                    basics: hardware, software, mathematics and applications <br />
                                    Exciting things happening these days<br />
                                    Future Horizons.<br />
                                    Hands on demonstrations on various aspects</p>
                        </div>
                        <div className='course-details'>
                            <table className='course-details-table'>
                                <tr>
                                    <td>Instructor(s)</td>
                                    <td>MV Panduranga Rao</td>
                                </tr>
                                <tr>
                                    <td>Course ID</td>
                                    <td>CS1000</td>
                                </tr>
                                <tr>
                                    <td>Department</td>
                                    <td>Computer Science and Engeneering</td>
                                </tr>
                                <tr>
                                    <td>Level</td>
                                    <td>Undergraduate</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='enroll-course'>
                <button><Link to="/Introduction-to-CS/Course">ENROLL</Link></button>
            </div>
        </div>
    )
}

export default IntroToCS