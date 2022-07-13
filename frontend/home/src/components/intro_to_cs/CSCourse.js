import React from "react";
import '../discrete_maths/Course.css';

function CSCourse() {
    return(
        <div className='course-card-big' id="Card-Big">
            <div className='course-info'>
                <div className='course-img' id="Course_Image">
                    <img src={process.env.PUBLIC_URL+'images/Intro_to_CS'} />
                </div>
                <div className='course-data'>
                    <div className='course-discription' id="Course_Content">
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
    );
}

export default CSCourse