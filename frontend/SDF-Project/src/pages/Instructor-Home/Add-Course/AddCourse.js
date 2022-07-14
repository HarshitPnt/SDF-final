import React,{useRef,useState} from 'react'
import InstructorSidebar from '../../../components/InstuctorSidebar/InstructorSidebar'
import './addcourse.css'
import Navbar from '../../../components/navbar/Navbar'
import axios from 'axios'
import {Link,useParams} from 'react-router-dom'

function AddCourse() {
    const nameRef=useRef(null)
    const endDateRef=useRef(null)
    const descRef=useRef(null)
    const subjectRef=useRef(null)
    const {instructorID}=useParams()
    const handleSubmit=async()=>{
        const resp=await axios.post(`http://192.168.51.89:5001/courses/new/${instructorID}`,{
            name: nameRef.current.value,
            end_date: "",
            subject: subjectRef.current.value,
            description: descRef.current.value
        })
        console.log(resp)
    }
  return (
    <div className="add-new">
    <div className='side-add-new'>
            <InstructorSidebar/>
    </div>
    <div className="main-content-add-new">
        <Navbar/>
        <div className="page-content-add-new">
            <h1 className="post-header">Add A New Course</h1>
            <div className="form-new-course">
                <div className="left-new-course">
            
                    <div className="form-item">
                    <label htmlFor="Course-Name" className="item-label-add-new">Course Name</label>
                    <input type="text" placeholder='Course Name' autoComplete='off' ref={nameRef}/>
                    </div>
                    {/* <div className="form-item">
                    <label htmlFor="Course-Name" className="item-label-add-new">Course Start Date</label>
                    <input type="date" placeholder='Start Date' autoComplete='off'/>
                    </div> */}
                    {/* <div className="form-item">
                    <label htmlFor="Course-Name" className="item-label-add-new">TAs</label>
                    <input type="text" placeholder='TA list' autoComplete='off'/>
                    </div> */}
                    <div className="form-item">
                    <label htmlFor="Course-Name" className="item-label-add-new">Subject</label>
                    <input type="text" placeholder='Subject' autoComplete='off' ref={subjectRef}/>
                    </div>
                    <div className="form-item">
                    <label htmlFor="Course-Name" className="item-label-add-new">End Date</label>
                    <input type="date" placeholder='End Date' autoComplete='off' ref={endDateRef}/>
                    </div>
                    
                </div>
               <div className="right-new-course">
                <label htmlFor="Course-Description" className="course-dec-label">Give A Course Description</label>
                <textarea name="Course Description" className="course-desc-text" cols="80" rows="10" placeholder="Course Description" ref={descRef}></textarea>
                
                <div className="btn-send-new">
                    <div className="btn-container-send">
                    <button className="btn btn-primary custom-btn-send" onClick={handleSubmit}>Submit</button>
                    </div>
                
                </div>
               
               </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default AddCourse
