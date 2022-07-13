import React from "react";
import './Material.css'
import { Link, Outlet } from "react-router-dom";

function DiscreteMaterial () {
    return (
        <div className="pdf-content">
            <ul className="side-display">
                <li><Link to="Lecture_Material_1">
                    Lecture 1</Link>
                </li>
                <br />
                <li><Link to="Lecture_Material_2">
                    Lecture 2</Link>
                </li>
                <br />
                <li><Link to="Lecture_Material_3">
                    Lecture 3</Link>
                </li>
                <br />
                <li><Link to="Lecture_Material_4">
                    Lecture 4</Link>
                </li>
                <br />
                <li><Link to="Lecture_Material_5">
                    Lecture 5</Link>
                </li>
                <li><Link to="Lecture_Material_6">
                    Lecture 6</Link>
                </li>
                <li><Link to="Lecture_Material_7">
                    Lecture 7</Link>
                </li>
                <li><Link to="Lecture_Material_8">
                    Lecture 8</Link>
                </li>
                <li><Link to="Lecture_Material_9">
                    Lecture 9</Link>
                </li>
                <li><Link to="Lecture_Material_10">
                    Lecture 10</Link>
                </li>
                <li><Link to="Lecture_Material_11">
                    Lecture 11</Link>
                </li>
                <li><Link to="Lecture_Material_12">
                    Lecture 12</Link>
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

export default DiscreteMaterial