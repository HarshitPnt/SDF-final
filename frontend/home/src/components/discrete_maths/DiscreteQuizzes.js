import React from "react";
import { Link } from "react-router-dom";
import './Quizzes.css';
//import { Outlet } from "react-router-dom";

function DiscreteQuizzes () {
    return(
        <div className="Quizzes-list">
            <div className="Quiz-container">
                <div className="Quiz-heading">
                    <h2>Quiz-1</h2>
                    <h3>Concept Name</h3>
                </div>
                <div className="Quiz-details">
                    <table className="Quiz-details-table">
                        <tr>
                            <th>Quiz No.</th>
                            <th>Concept</th>
                            <th>No. of Questions</th>
                            <th>Out of Score</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Concept-1</td>
                            <td>5</td>
                            <td>5</td>
                        </tr>
                    </table>
                </div>
                <div className="start">
                    <button><Link to="Quiz">Start Quiz Now</Link></button>
                </div>
            </div>
            <div className="Quiz-container">
                <div className="Quiz-heading">
                    <h2>Quiz-2</h2>
                    <h3>Concept Name</h3>
                </div>
                <div className="Quiz-details">
                    <table className="Quiz-details-table">
                        <tr>
                            <th>Quiz No.</th>
                            <th>Concept</th>
                            <th>No. of Questions</th>
                            <th>Out of Score</th>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Concept-2</td>
                            <td>5</td>
                            <td>5</td>
                        </tr>
                    </table>
                </div>
                <div className="start">
                    <button><Link to="Quiz">Start Quiz Now</Link></button>
                </div>
            </div>
        </div>
    );
}

export default DiscreteQuizzes;