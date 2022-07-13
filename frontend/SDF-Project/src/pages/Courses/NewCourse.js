import React from 'react'
import {useEffect,useState,useRef} from 'react'
import './newcourse.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import {newCourseInput} from '../../components/datatable/formInput'
import New_component from '../../components/datatable/new/New_component'
function NewCourse() {
  return (
    <div className="new-course">
      <Sidebar/>
      <div className="new-course-content">
        <Navbar/>
        <div className="main-content-new-course">
          {/* <h1 className="heading-new-course">
            Add A New Course
          </h1> */}
          <div className="form-new-course">
          <New_component inputs={newCourseInput} title={'Add A New Course'} pic_title={"Course Picture"} />
          </div>
         
          <div className="bottom-new-course">
            <div className="left-new-course mx-4 my-4 px-4">
              <h2 className="course-desc-title">Add A Course Description</h2>
              <textarea name="course-description" className="course-description" cols="90" rows="8"></textarea>
            </div>
            <div className="right-new-course mx-4 my-4">
              <h3 className="course-options">Options</h3>
              <div className="enable-calculator">
              <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" for="flexSwitchCheckDefault">Enable Calculator</label>
            </div>
              </div>
              <div className="enable-leaderboard">
              <div className="form-check form-switch">
              <input className="form-check-input radio-1" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label radio-2" for="flexSwitchCheckDefault">Enable Leaderboard</label>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCourse
