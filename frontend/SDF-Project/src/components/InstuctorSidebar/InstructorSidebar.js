import React from 'react'
import './instructorsidebar.css'
import{User,Books,Chat,Star,Question} from 'phosphor-react'
import {Link,useParams} from 'react-router-dom'
function InstructorSidebar() {
    const {instructorID} =useParams()
  return (
    <div className="inst-side-main">
        <div className="top-side-inst">
            <a href="http:192.168.51.89:3000">Home</a>
        </div>
        <div className="middle-side-inst">
            <div className="options-side-inst">
                <ul className="side-inst-items">
                   <p className="mt-4 title-items-side-inst">My Account</p> 
                   
                   <Link to={`/instructor/${instructorID}`}><li className="py-4 my-4 custom-inst"><User size={32} color="#c94f0d" weight="duotone" /> Profile</li>
                    <p className="title-items-side-inst">Options</p></Link> 
                    <li className="py-4 my-4 custom-inst">
                    <div className="dropdown cust-drop-container"><div className="options-side"><Books size={32} color="#c94f0d" weight="duotone" /><p className='options-side-stud'>Courses</p>
                    <Link to={`/instructor/${instructorID}/courses/add`}/><div className="dropdown-content custom-drop">Add Material</div>
                    <div className="dropdown-content custom-drop">Request A Course</div>
                    </div> 
                    </div>
                    </li>
                   {/* <Link to={`/instructor/${instructorID}/addrequest`}></Link> */}
                    <li className="py-4 my-4 custom-inst"><Chat size={32} color="#c94f0d" weight="duotone" />Chat</li>
                {/* <Link to={`/instructor/${instructorID}/Reviews`}></Link> */}
                 <li className="py-4 my-4 custom-inst"><Star size={32} color="#c94f0d" weight="duotone" /> Reviews</li>
                  {/* <Link to={`/instructor/${instructorID}/inbox`}></Link> */}

                  {/* <Link to={`/instructor/${instructorID}/inobx/sent`}></Link> */}
                  {/* <Link to={`/instructor/${instructorID}/inobx/compose`}></Link> */}
                   <li className="py-4 my-4 custom-inst"><Question size={32} color="#c94f0d" weight="duotone" />Doubts</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default InstructorSidebar
