import React from 'react'
import './student_sidebar.css'
import {Link} from 'react-router-dom'
import {User,BookOpen,Books,CalendarCheck,Chat} from 'phosphor-react'
import {useLocation,useParams} from 'react-router-dom'

function Student_sidebar() {
  const loc=useLocation()
  const {studentID}=useParams()
  
  return (
    <div className="Sidebar-stu">
      <div className="top-side-stu">
        <div className="top-content-side-stu">
            <a href="http://192.168.51.89:3000">Home</a>
        </div>
      </div>
      <div className="middle-side-stu">
        <ul>
            <p className="sidebar-labels pt-4">MY ACCOUNT</p>

           <Link to ={`/student/${studentID}`}><li className="item-side-stu"><div className="options-side"><User size={28} color="#812222" weight="duotone" /><p className='options-side-stud'>Profile</p></div> </li>
            <p className="sidebar-labels">MY SERVICES</p></Link> 
            <li className="item-side-stu"><div className="options-side"><BookOpen size={28} color="#812222" weight="duotone" /><p className='options-side-stud'>{loc.pathname===`/student/${studentID}`?<a href="#1">My Courses</a>: <Link to={`/student/${studentID}#1`}>My Courses</Link>} </p></div> </li>
            <li className="item-side-stu">
            <div className="dropdown">
            <div className="options-side"><Books size={28} color="#812222" weight="duotone" /><p className='options-side-stud'>New Course</p></div> 
                <div className="dropdown-content">
               {loc.pathname===`/student/${studentID}`?<a href="#2">Recommended Courses</a>: <Link to={`/student/${studentID}#2`}>Recommmended Courses</Link>} 
              {/* <Link to={`/user/${studentID}/student/new`}>View More Courses</Link>  */}
            </div>
            </div>
            </li>
            <li className="item-side-stu"><div className="options-side"><CalendarCheck size={28} color="#812222" weight="duotone" /><p className='options-side-stud'>{loc.pathname===`/student/${studentID}`?<a href="#3">To-Do</a>: <Link to={`/student/${studentID}#3`}>To-Do</Link>} </p></div> </li>
           
           <li className="item-side-stu">
            <div className="dropdown">
            <div className="options-side"><Chat size={28} color="#812222" weight="duotone" /><p className='options-side-stud'>Chat</p></div> 
                <div className="dropdown-content">
             <Link to={`/student/${studentID}/inbox`}>Inbox</Link>
              <Link to={`/student/${studentID}/inbox/sent`}>Sent</Link>
              <Link to={`/student/${studentID}/inbox/compose`} state={{sender: ''}}>Compose</Link>
            </div>
            </div>
            </li>
           {/* <Link to={`/student/${studentID}/inbox`}><li className="item-side-stu"><div className="options-side"></div> </li></Link>  */}
        </ul>
      </div>
      <div className="bottom-side-stu">
      </div>
    </div>
  )
}

export default Student_sidebar
