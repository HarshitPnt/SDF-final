import React from "react";
import '../discrete_maths/Video.css';
import { useState } from "react";
import { Link } from "react-router-dom";

function CSVideos () {
    const [style, setStyle] = useState("video-block");

    const changeStyle = () => {
        if(style === "video-block"){
            setStyle("video-block2");
        }
        else if(style === "video-block2"){
            setStyle("video-block");
        }
    }
    return (
        <div className="videos">
            <div id="fade"></div>
            <div id="video1" className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VHHDgSMsd5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <h2>Lecture 1 - Introduction to Proofs </h2>
                <br />
                <button ><a href="http://192.168.51.89:3000/Discrete-Mathematics/Material/Lecture_Material_1">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TL6CuTw8fSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <h2>Lecture 2 - Propositional Logic - 1 </h2>
                <br />
                <button ><a href="http://192.168.51.89:3000/Discrete-Mathematics/Material/Lecture_Material_2">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}>
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HONUPL3uqGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> 
                <h2>Lecture 3 - Propositional Logic, valid arguments </h2>
                <br />
                <button ><a href="http://192.168.51.89:3000/Discrete-Mathematics/Material/Lecture_Material_3">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/D2JhLXjeBOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Lecture 4 - Predicate Logic, Quantifiers </h2>
                <br />
                <button ><a href="http://192.168.51.89:3000/Discrete-Mathematics/Material/Lecture_Material_4">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ag0I_CKQgps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Lecture 5 - Nested Quantifiers</h2>
                <br />
                <button ><a href="http://192.168.51.89:3000/Discrete-Mathematics/Material/Lecture_Material_5">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WgzQhIBTX5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <h2>Lecture 6 - Mathematical Induction </h2> 
                <br />
                <button ><a href="http://192.168.51.89:3000/Discrete-Mathematics/Material/Lecture_Material_6">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}>  
                <div className="video">             
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JmQ7S53CpKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <h2>Lecture 7 - Strong Induction </h2>
                <br />
                <button ><a href="http://192.168.51.89:3000/Discrete-Mathematics/Material/Lecture_Material_7">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}>
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/aHEdZ2OFFTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <h2>Lecture 8 - Well Ordering Principle and Structural Induction</h2>                
                <br />
                <button ><a href="http://192.168.51.89:3000/Discrete-Mathematics/Material/Lecture_Material_8">Lecture Slides</a></button>
            </div>
            {/* <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5hhi_uqJjHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Lecture 9 - Sets and Functions </h2>
                <br />
                <button >Lecture Slides</button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/i2zXrdshl_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Lecture 10 - Cardinality and Infinite Sets </h2>
                <br />
                <button >Lecture Slides</button>
            </div>
            <div className={style} onClick={changeStyle}>
                <div className="video"> 
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TnMATxptDaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>               
                </div>
                <h2>Lecture 11 - Infinite Cardinality, Computation </h2>
                <br />
                <button >Lecture Slides</button>
            </div>
            <div className={style} onClick={changeStyle}>
                <div className="video">              
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NzmJmJ3rjRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Lecture 12 - Relations </h2>
                <br />
                <button >Lecture Slides</button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/t-WCUttrTNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Lecture 13 Equivalence Relations, Partial Relations </h2>
                <br />
                <button >Lecture Slides</button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lsYQDMdyYE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Lecture 14 - Posets and Pegion hole Principle </h2>
                <br />
                <button >Lecture Slides</button>
            </div>
            <div className={style} onClick={changeStyle}>  
                <div className="video">              
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rWhkgc0yR5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Lecture 15 - Generating Functions and Applications </h2>
                <br />
                <button >Lecture Slides</button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/nmriYZzQhPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Lecture 16 - Graph Theorey Part 1 </h2>
                <br />
                <button >Lecture Slides</button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eIOCyNDrjRQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Lecture 17 - Graph Theorey Part 2 </h2>
                <br />
                <button >Lecture Slides</button>
            </div>
            <div className={style} onClick={changeStyle}>
                <div className="video">                
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/iH6pcOJV5iI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Lecture 18 - Graph Theorey Part 3 </h2>
                <br />
                <button >Lecture Slides</button> 
            </div>*/}
        </div>
    );
}

export default CSVideos