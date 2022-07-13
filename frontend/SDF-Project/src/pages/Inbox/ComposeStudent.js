import React,{useState,useRef} from 'react'
import './composestudent.css'
import Student_sidebar from '../../components/student-sidebar/Student_sidebar'
// import Navbar from '../../components/navbar/Navbar'
import {useLocation,Link,useParams} from 'react-router-dom'
import axios from 'axios'

function ComposeStudent({sendTo}) {

    const location=useLocation()
    const {sender,subject}=location.state

    const refSender=useRef(null)
    const refSubject=useRef(null)
    const refMessage=useRef(null)

    const handleSend=async()=>{
        let response = await axios.post(`http://192.168.51.89/messages/student/${studentID}`,{
        "to":refSender.current.value,
        "subject":refSubject.current.value,
        "content":refMessage.current.value
        })
        console.log("Sent")
    }
    const {studentID} =useParams()
  return (
    <div className='compose-inbox-student'>
      <Student_sidebar/>
      <div className="main-content-compose-student">
        {/* <Navbar/> */}
        <div className="page-content-compose-student">
            <h1 className="heading-compose-student">Compose A Message</h1>
            <div className="compose-area-student">
            <div className="mb-3">
              <label htmlFor='exampleFormControlInput2' className="form-label">Enter the Username</label>
              <input type="text" id="exampleFormControlInput2" placeholder="Subject" autoComplete="off" ref={refSender} defaultValue={sender} />
            </div>
            <div className="mb-3">
              <label htmlFor='exampleFormControlInput2' className="form-label">Enter the Subject</label>
              <input type="text" id="exampleFormControlInput2" placeholder="Subject" autoComplete="off" ref={refSubject} defaultValue={subject} />
            </div>
                <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Write A Message</label>
            <textarea className="form-control course-description" id="exampleFormControlTextarea1"  rows="10" placeholder='Message'></textarea>
            <div className="btn-for-send">
               <Link to={`/student/${studentID}/inbox`}><button className="btn-primary btn mx-3 px-3">Inbox</button></Link> 
               <Link to={`/student/${studentID}/inbox/sent`}><button className="btn-primary btn mx-3">Sent Items</button></Link> 
                <button className="btn-primary btn" onClick={handleSend}>Send</button>
            </div>
            </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default ComposeStudent
