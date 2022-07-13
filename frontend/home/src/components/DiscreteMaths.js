import React from 'react';
import './Course.css'
import { Link } from "react-router-dom";

function DiscreteMaths() {
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
                        <img src={process.env.PUBLIC_URL+'images/discrete_maths'} />
                    </div>
                    <div className='course-data'>
                        <div className='course-discription'>
                            <h2>Discription</h2>
                            <p>This course deals with the Concept of Mathematical Proof, Logic, Proof by contradiction, Mathematical Induction,<br /> Constructive Proofs, Sets, Relations. 
                            Illustration of Proof Techniques in various mathematical topics.<br />
                            Combinatorics: Basic Counting Principles, Inclusion-Exclusion Principle, Binomial/Multinomial Coefficients,<br />
                             Bijections, Double Counting, Pigeon-Hole Principle, Recurrence Relations.
                            <br />Introduction to Graphs: Basic terminology/Definitions, Isomorphism, Connectivity, Trees, Planarity, Optional: Matchings, Colorings.
                            <br /> Introduction to abstract algebra: Basics of Groups, Optional: Rings, Fields, Polynomial Rings.<br />
                             Introduction to number theory, modular arithmetic, prime factorization, Optional: Chinese Remainder theorem.</p>
                        </div>
                        <div className='course-details'>
                            <table className='course-details-table'>
                                <tr>
                                    <td>Instructor(s)</td>
                                    <td>Rakesh Venkat</td>
                                </tr>
                                <tr>
                                    <td>Course ID</td>
                                    <td>CS1010</td>
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
                <Link to="/Discrete-Mathematics/Course">
                    <button>ENROLL</button>
                </Link>
            </div>
        </div>
    )
}

export default DiscreteMaths