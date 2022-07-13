import React from "react";
import '../discrete_maths/Course.css';

function PhysicsCourse() {
    return(
        <div className='course-card-big' id="Card-Big">
        <div className='course-info'>
            <div className='course-img' id="Course-Image">
                <img src={process.env.PUBLIC_URL+'images/physics_lab'} />
            </div>
            <div className='course-data'>
                <div className='course-discription' id="Course-Content">
                    <h2>Discription</h2>
                    <p>This Course deals with 10 main experiments of Physics.<br />
                    Namely, Young's Modulus of wood using a Strain Gauge,  Rigidity Modulus of a wire using Torsional Pendulum.
                    <br /> Stefa's law and Planck's constant, Principle of superposition using a Cathode Ray Oscilloscope.
                    <br />Refractive index of the material of the prism using a Spectrometer, Measurement of radius of curvature <br />
                    of the plano convex lens by forming Newton`s rings, Wavelength of a laser by studying the diffraction from a scale.
                    <br />Field along the axis of a coil and the earth's magnetic field, Energy gap of a semiconductor.
                    <br />Characteristics of Bipolar Junction Transistor (BJT).
                    </p>
                </div>
                <div className='course-details'>
                    <table className='course-details-table'>
                        <tr>
                            <td>Instructor(s)</td>
                            <td>Arabinda Haldar</td>
                        </tr>
                        <tr>
                            <td>Course ID</td>
                            <td>EP1031</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>Engeneering Physics</td>
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

export default PhysicsCourse