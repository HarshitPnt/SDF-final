import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Course2.css'

function DiscreteMathsTwo () {
    return (
        <div className="App">
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
            <div className="content">
                <div className="Nav-bar-2">
                    <ul>
                        <li className="Active"><Link to="Course">Course</Link></li>
                        <li><Link to="Lectures">Lecture Videos</Link></li>
                        <li><Link to="Material">Lecture Material</Link></li>
                        <li><Link to="Quizzes">Assignments</Link></li>
                        <Outlet />
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default DiscreteMathsTwo