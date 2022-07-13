import React,{useState,useRef,useEffect} from 'react'
import InstructorSidebar from '../../components/InstuctorSidebar/InstructorSidebar'
import Navbar from '../../components/navbar/Navbar'
import './addcoursematerial.css'
import {UploadSimple} from 'phosphor-react'


function AddCourseMaterial() {

    const [disabled,setDisabled]=useState({first:true,second:true,third:true,fourth:true,fifth:true})
    const iRef1=useRef(null)
    const iRef2=useRef(null)
    const iRef3=useRef(null)
    const iRef4=useRef(null)
    const iRef5=useRef(null)
    const iRef6=useRef(null)

    function genData(){
        console.log(disabled)
        // console.log(iRef1.current.disabled)
    }

    const handleChange=()=>{
        if(iRef6.current.value==="Lecture"){
            setDisabled({first:false,second:false,third:true,fourth:true,fifth:true})
        }
        else if(iRef6.current.value==="Reading Material"){
            setDisabled({first:false,second:true,third:true,fourth:false,fifth:true})
        }
        else if(iRef6.current.value==="Assignment"){
            setDisabled({first:false,second:true,third:false,fourth:true,fifth:true})
        }
        else if(iRef6.current.value==="File"){
            setDisabled({first:false,second:true,third:true,fourth:true,fifth:false})
        }
    }

  return (
    <div className="add-course-material" onLoad={genData()}>
        <InstructorSidebar/>
        <div className="main-page-add-material">
            <Navbar/>
            <div className="page-content-add-material">
                <h1 className="course-material-add-title">
                    Add Course Material To Name
                </h1>
                <div className="add-material">
                <div className="left-add-material">
                    <div className="form-add-material">
                        <form id="form-add-material-options">
                            <div className="item-add-material">
                                <label htmlFor="Material Type" className="add-material-title"> Select the type of Material</label>
                                <select ref={iRef6} name="Material Type" id="cars" onChange={handleChange}>
                                <option value="none" selected disabled hidden>Select an Option</option> 
                                <option value="Lecture">Lecture</option>
                                <option value="Reading Material" placeholder="Select">Reading Material</option>
                                <option value="Assignment">Assignment</option>
                                <option value="File">File</option></select>
                            </div>
                            <div className="item-add-material">
                                <label ref={iRef1} htmlFor="" className="add-material-title" >Add Material Number</label>
                                <input type="text" placeholder='No.' disabled={disabled.first===undefined?true:disabled.first}/>
                            </div>
                            <div className="item-add-material">
                                <label ref={iRef2} htmlFor="" className="add-material-title" >Upload Lecture Link</label>
                                <input type="url" placeholder='video-link' disabled={disabled.second}/>
                            </div>  
                            <div className="item-add-material">
                                <label ref={iRef3} htmlFor="file" className="add-material-title add-margin" ><UploadSimple size={25} color="#9e0089" weight="light" className="icon-upload" />Upload Assignment</label>
                                <input type="file" id="file" placeholder='Assignment' disabled={disabled.third}/>
                            </div>
                            <div className="item-add-material">
                                <label ref={iRef4} htmlFor="" className="add-material-title" >Upload Other Useful Links</label>
                                <input type="url" placeholder='links' disabled={disabled.fourth}/>
                            </div>
                            <div className="item-add-material">
                                <label ref={iRef5} htmlFor="file-2" className="add-material-title add-margin-2" ><UploadSimple size={25} color="#9e0089" weight="light" className="icon-upload" />Upload Other File</label>
                                <input type="file" id="file-2" placeholder='file' disabled={disabled.fifth}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right-add-material">
                    <div className="material-desc">
                        <label htmlFor="material-desc-area" className= "add-material-title">Enter the material description</label>
                        <textarea name="" id="material-desc-area" cols="70" rows="10" placeholder='Enter a description'></textarea>
                        <div className="btn-send-material">
                            <button className="btn btn-primary btn-send-material-real">Send</button>
                        </div>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default AddCourseMaterial
