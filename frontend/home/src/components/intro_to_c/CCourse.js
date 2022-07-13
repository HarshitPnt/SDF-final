import React from "react";
import '../discrete_maths/Course.css';

function CCourse() {
    return(
        <div className='course-card-big' id="Card-Big">
            <div className='course-info'>
                <div className='course-img' id="Course_Image">
                    <img src={process.env.PUBLIC_URL+'images/Intro_to_C.png'} />
                </div>
                <div className='course-data'>
                    <div className='course-discription' id="Course-Content">
                        <h2>Discription</h2>
                        <p>Introduction to C programming. Problem solving and algorithms. <br />
                        Input and output operations, decision control structure, loop control structure, arrays, strings, etc.
                            <br />pointers, arrays, structures, functions, file operations.
                            <br />Lab is also included in this course.</p>
                    </div>
                    <div className='course-details'>
                        <table className='course-details-table'>
                            <tr>
                                <td>Instructor(s)</td>
                                <td>Karteek Srinivasaiah, Ramakrishna Upadrasta</td>
                            </tr>
                            <tr>
                                <td>Course ID</td>
                                <td>ID1063</td>
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

export default CCourse