import React from 'react'
// import './sidebar.css'
import {Link,useParams} from 'react-router-dom'
import {Student,ChalkboardTeacher,BookBookmark,Gear,User,CurrencyInr,Books,Chat,Star,Question} from 'phosphor-react'
import './instsidebar.css'


function InstSidebar() {

    const {instructorID}=useParams()

  const {adminID}=useParams()
  return (
    <div className="sidebar side-inst">
      <div className="top-bar logo">
        logo
      </div>
      <hr />
      <div className="middle">
            <ul>
                <p className="title">My Account</p>
              <li className='inst-items-side'><User size={32} color="#e22c2c" weight="duotone" /><span><Link to={`/instructor/${instructorID}`}></Link>Profile </span></li>
              <p className="title">Options</p>
               <li className='inst-items-side'>
                <div className="dropdown">
                <Books size={32} color="#e22c2c" weight="duotone" /><span>Courses</span>
                <div className="dropdown-content">
                <Link to={`/instructor/${instructorID}/addrequest`}>Request A Course</Link>
                <Link to={`/instructor/${instructorID}/courses/add`}>Add Material</Link>
                </div>
                
                </div> 
                </li>
                <li className='inst-items-side'><div className="dropdown">
                <Chat size={32} color="#e22c2c" weight="duotone" /><span>Chat</span>
                <div className="dropdown-content">
                <Link to={`/instructor/${instructorID}/inbox`}>Inbox</Link>
                <Link to={`/instructor/${instructorID}/inbox/sent`}>Sent</Link>
                <Link to={`/instructor/${instructorID}/inbox/compose`} >Compose A Message</Link>
                </div>
                </div>
                </li>
                <li className='inst-items-side'><Star size={32} color="#e22c2c" weight="duotone" /><span><Link to={`/instructor/${instructorID}/reviews`}></Link>Reviews </span></li>
                <li className='inst-items-side'><Question size={32} color="#e22c2c" weight="duotone" /><span><Link to={`/instructor/${instructorID}/reviews`}></Link>Doubts</span></li>
                </ul>
      </div>
    </div>
  )
}

export default InstSidebar
