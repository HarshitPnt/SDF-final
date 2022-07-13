import React,{useRef,useState,useEffect} from 'react'
import InstructorSidebar from '../../../components/InstuctorSidebar/InstructorSidebar'
import './instructorDashboard.css'
import Navbar from '../../../components/navbar/Navbar'
import CourseWidget from '../../../components/courseWidget/courseWidget'
import LineChart from '../../../components/Charts/LineChart'
import DataTable from 'react-data-table-component'
import CoursesDatatable from '../../../components/datatable/CoursesDatatable'
import InstSidebar from '../../../components/InstSidebar/InstSidebar'

function InstructorDashboard() {
  return (
    <div className="inst-dash">
        <div className="side-inst">
        <InstSidebar/>
        </div>
       <div className="page-content-instr">
        <Navbar/>
        <div className="main-content-inst">
        <h1 className="welcome-inst">Welcome back Name!</h1>
        </div>
        <div className="data-bar">
            
            <CourseWidget left="Student" right="23340" styles={{back:{backgroundColor: "#DCCEFF"}, text:{color: "#A488EA"}, left:{backgroundColor: "#EEE7FF"}}}/>
            <CourseWidget  left="Courses" right="5152" styles={{back:{backgroundColor: "#FBD0DC"}, text:{color: "#FF376B"}, left:{backgroundColor: "#FAFAFB"}}}/>
            <CourseWidget left="Assignments" right="414" styles={{back:{backgroundColor: "#CDEEFB"}, text:{color: "#1ABCFD"}, left:{backgroundColor: "#E6F7FD"}}}/>
            <CourseWidget left="Materials" right="5153" styles={{back:{backgroundColor: "#FBE6C9"}, text:{color: "#FEAA31"}, left:{backgroundColor: "#FAFAFB"}}}/>
        </div>
        <div className="charts">
        <div className="chart-1">
                <LineChart title="My-Activity"/> 
            </div>
            <div className="chart-2">
                <LineChart title="Viewers"/> 
            </div>
        </div>
            <div className="mycourses-inst" id="1">
              <CoursesDatatable/>
            </div>
       </div>
    </div>
  )
}

export default InstructorDashboard
