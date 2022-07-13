import React ,{useState,useEffect,useRef} from 'react'
import './coursecard.css'
import {CircularProgressbar} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

function CourseCard(props) {

    

  return (
    <div class="container-course">
      <div class="course-card">
          <div class="content-course-card">
              <div class="imgBx">
                  <img className="image-course" src= "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" />
              </div>
              <div class="contentBx">
                  <h3>{props.title}</h3>
              </div>
              <div className="progress">
                <div className="left-coursecard">
                    <p className="current-title">Progress</p>
                </div>
                <div className="right-coursecard">
                    <div className="progress-chart">
                        <CircularProgressbar value={70} text={"70%"}/>
                    </div>
                </div>
              </div>
              <div >
                  <button className="enroll">Resume</button>
              </div>
          </div>
      </div>
      </div>
  )
}

export default CourseCard
