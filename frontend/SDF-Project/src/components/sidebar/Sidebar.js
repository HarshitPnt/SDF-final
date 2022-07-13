import React from 'react'
import './sidebar.css'
import {Link,useParams} from 'react-router-dom'
import {Student,ChalkboardTeacher,BookBookmark,Gear,User,CurrencyInr,Chat} from 'phosphor-react'



function Sidebar() {

  const {adminID}=useParams()
  return (
    <div className="sidebar">
      <div className="top-bar logo">
        <a href="http://192.168.51.89:3000">Home</a>
      </div>
      <hr />
      <div className="middle">
            <ul>
                <p className="title">USERS</p>
              <li><div className="dropdown"> <ChalkboardTeacher size={32} color="#e22c2c" weight="duotone" /><span>Instructors</span>
               <div className="dropdown-content">
               <Link to={`/${adminID}/user/instructor`}>View List Of Instructors</Link>
               <Link to={`/${adminID}/user/instructor/New`}>Add New Instructor</Link>
                </div>
                
               </div>
               </li>
               <li>
                <div className="dropdown">
                <Student size={32} color="#e22c2c" weight="duotone" /><span>Students</span>
                <div className="dropdown-content">
                <Link to={`/${adminID}/user/student`}>View List Of Students</Link>
                <Link to={`/${adminID}/user/student/New`}>Add New Student</Link>
                </div>
                
                </div> 
                </li>
                {/* <li><div className="dropdown">
                <User size={32} color="#e22c2c" weight="duotone" /><span>TAs</span>
                <div className="dropdown-content">
                <Link to={`/${adminID}/user/TA`}>View List Of TAs</Link>
                <Link to={`/${adminID}/user/TA/New`}>Add New TA</Link>
                </div>
                </div>
                </li> */}
                <p className="title">SERVICES</p>
                <li><div className="dropdown">
                
                <BookBookmark size={32} color="#e22c2c" weight="duotone" /><span>Courses</span> 
                <div className="dropdown-content">
                <Link to={`/${adminID}/courses`}>View List Of Courses</Link>
                {/* <Link to={`/${adminID}/courses/new`}>Add New Course</Link> */}
                </div>
              
                </div> 
                </li>
                {/* <li>
                
                <CurrencyInr size={32} color="#e22c2c" weight="duotone" /><span>Revenue</span>
                
                </li> */}
                 
                <li>
                <div className="dropdown"> 
                  <Chat size={32} color="#e22c2c" weight="duotone" /><span>Chat</span>
                  <div className="dropdown-content">
                <Link to={`/${adminID}/inbox`} >View Inbox</Link>
                <Link to={`/${adminID}/inbox/sent`}>View Sent Items</Link>
                <Link to={`/${adminID}/inbox/compose`} state={{sender: '',subject: ''}}>Compose A Message</Link>
                </div>
                </div>
                  </li>
                {/*<p className="title">SETTINGS</p>
                <li><Gear size={32} color="#e22c2c" weight="duotone" /><span>Settings</span></li> */}
            </ul>
      </div>
    </div>
  )
}

export default Sidebar
