import React from "react";
import './Course.css';

function DiscreteCourse () {
    return (
        <div className='course-card-big' id="Card-Big">
        <div className='course-info'>
            <div className='course-img' id="Course_Image">
                <img src={process.env.PUBLIC_URL+'images/discrete_maths'} />
            </div>
            <div className='course-data'>
                <div className='course-discription' id="Course_Content">
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
    );
}

export default DiscreteCourse