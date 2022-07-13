import React from "react";
import '../discrete_maths/Video.css';
import { useState } from "react";

function CVideos () {
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
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bsh77IIRs9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>               
                </div>
                <h2>Experiment 1 - Determination of Young's Modulus  </h2>
                <br />
                <button ><a href="http://192.168.51.89:3000/Introduction-to-C/Material/Lecture_Material_1">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/R2w77axkeGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Experiment 2 - Ditermination of Rigid Modulus </h2>
                <br />
                <button ><a href="http://192.168.51.89:3000/Introduction-to-C/Material/Lecture_Material_2">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}>
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0_rBRsU7Kc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div> 
                <h2>Experiment 3 Stefan's law and Planck's Constant </h2>
                <br />
                <button ><a href="http://192.168.51.89:3000/Introduction-to-C/Material/Lecture_Material_3">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dbOgjoGaVxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Experiment 4 Principle of Superposition </h2>
                <br />
                <button ><a href="http://192.168.51.89:3000/Introduction-to-C/Material/Lecture_Material_4">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/RZFLJqsow-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </div>
                <h2>Experiment 5 Refractive index of Prism</h2>
                <br />
                <button ><a href="http://192.168.51.89:3000/Introduction-to-C/Material/Lecture_Material_5">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}> 
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Mqbkz_kT5s8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Experiment 6 Newton's Rings Experiment </h2> 
                <br />
                <button ><a href="http://192.168.51.89:3000/Introduction-to-C/Material/Lecture_Material_6">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}>  
                <div className="video">             
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SmzdVS0b_Bo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Experiment 7 Diffraction from scale </h2>
                <br />
                <button ><a href="http://192.168.51.89:3000/Introduction-to-C/Material/Lecture_Material_7">Lecture Slides</a></button>
            </div>
            <div className={style} onClick={changeStyle}>
                <div className="video">               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7rLSLC_9K2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h2>Experiment 8 Earth's Magnetic field</h2>                
                <br />
                <button ><a href="http://192.168.51.89:3000/Introduction-to-C/Material/Lecture_Material_8">Lecture Slides</a></button>
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

export default CVideos