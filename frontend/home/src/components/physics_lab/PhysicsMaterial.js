import React from "react";
import '../discrete_maths/Material.css'
import { Link, Outlet } from "react-router-dom";

function PhysicsMaterial () {
    return (
        <div className="pdf-content">
            <ul className="side-display">
                <li><Link to="Lecture_Material_1">
                    Experiment 1</Link>
                </li>
                <br />
                <li><Link to="Lecture_Material_2">
                    Experiment 2</Link>
                </li>
                <br />
                <li><Link to="Lecture_Material_3">
                    Experiment 3</Link>
                </li>
                <br />
                <li><Link to="Lecture_Material_4">
                    Experiment 4</Link>
                </li>
                <br />
                <li><Link to="Lecture_Material_5">
                    Experiment 5</Link>
                </li>
                <li><Link to="Lecture_Material_6">
                    Experiment 6</Link>
                </li>
                <li><Link to="Lecture_Material_7">
                    Experiment 7</Link>
                </li>
                <li><Link to="Lecture_Material_8">
                    Experiment 8</Link>
                </li>
                <li><Link to="Lecture_Material_9">
                    Experiment 9</Link>
                </li>
                <li><Link to="Lecture_Material_10">
                    Experiment 10</Link>
                </li>
                <li><Link to="Lecture_Material_11">
                    Experiment 11</Link>
                </li>
                <li><Link to="Lecture_Material_12">
                    Experiment 12</Link>
                </li>  {/*
                <li>
                    Lecture 13
                </li>
                <li>
                    Lecture 14
                </li>
                <li>
                    Lecture 15
                </li>
                <li>
                    Lecture 16
                </li>
                <li>
                    Lecture 17
                </li>
                <li>
                    Lecture 18
                </li> */}
                <Outlet />
            </ul>
        </div>
    );
}

export default PhysicsMaterial