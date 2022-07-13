import React from 'react'
import InstructorSidebar from '../../../components/InstuctorSidebar/InstructorSidebar'
import './addcourse.css'
import Navbar from '../../../components/navbar/Navbar'

function AddCourse() {
  return (
    <div className="add-new">
    <div className='side-add-new'>
            <InstructorSidebar/>
    </div>
    <div className="main-content-add-new">
        <Navbar/>
        <div className="page-content-add-new">
            <h1 className="post-header"> Post A New Course Request To The Admin</h1>
            <div className="form-new-course">
                <div className="left-new-course">
            
                    <div className="form-item">
                    <label htmlFor="Course-Name" className="item-label-add-new">Course Name</label>
                    <input type="text" placeholder='Course Name' autoComplete='off'/>
                    </div>
                    <div className="form-item">
                    <label htmlFor="Course-Name" className="item-label-add-new">Course Start Date</label>
                    <input type="date" placeholder='Start Date' autoComplete='off'/>
                    </div>
                    <div className="form-item">
                    <label htmlFor="Course-Name" className="item-label-add-new">TAs</label>
                    <input type="text" placeholder='TA list' autoComplete='off'/>
                    </div>
                    <div className="form-item">
                    <label htmlFor="Course-Name" className="item-label-add-new">Subject</label>
                    <input type="text" placeholder='Subject' autoComplete='off'/>
                    </div>
                    <div className="form-item">
                    <label htmlFor="Course-Name" className="item-label-add-new">End Date</label>
                    <input type="date" placeholder='End Date' autoComplete='off'/>
                    </div>
                    
                </div>
               <div className="right-new-course">
                <label htmlFor="Course-Description" className="course-dec-label">Give A Course Description</label>
                <textarea name="Course Description" className="course-desc-text" cols="80" rows="40" placeholder="Course Description"></textarea>
                
                <div className="btn-send-new">
                    <div className="btn-container-send">
                    <button className="btn btn-primary custom-btn-send">Submit</button>
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
