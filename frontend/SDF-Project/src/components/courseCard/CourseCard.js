import React ,{useState,useEffect,useRef} from 'react'
import './coursecard.css'
import {CircularProgressbar} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import axios from 'axios'
import {useParams} from 'react-router-dom'

function CourseCard(props) {

    const {studentID} =useParams()

    const handleEnroll=async()=>{
        const resp=await axios.patch(`http://192.168.51.89:5001/${studentID}`,{
                name: props.title

        })

        console.log(resp)
    }

    const handleResume=()=>{
        
    }



  return (
    <div class="container-course">
      <div class="course-card">
          <div class="content-course-card">
              <div class="imgBx">
                  <img className="image-course" src= "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202009/e-learning_digital_education-1200x1080.jpg?XjMNHsb4gLoU_cC7110HB7jVghJQROOj" />
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
                  <button className="enroll" onClick={props.state==="Enroll"?handleEnroll:handleResume}> <a href={props.state=='Resume'?props.link:"#3"}>{props.state}</a> </button>
              </div>
          </div>
      </div>
      </div>
  )
}

export default CourseCard
