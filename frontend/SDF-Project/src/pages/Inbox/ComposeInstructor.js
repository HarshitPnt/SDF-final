import React,{useRef} from 'react'
import './compose.css'
import InstructorSidebar from '../../components/InstuctorSidebar/InstructorSidebar'
import Navbar from '../../components/navbar/Navbar'
import {useLocation,Link,useParams} from 'react-router-dom'
import axios from 'axios'



function ComposeInstructor({sendTo}) {
  const {instructorID}=useParams()

    const location=useLocation()
    const {sender,subject}=location.state
    // const  =useRef(null)
    const refSender=useRef(null)
    const refSubject=useRef(null)
    const refMessage=useRef(null)
    console.log(sender)
    console.log(subject)

    const handleSend=async()=>{
      const res=await axios.post(`http://192.168.51.89:5001/messages/prof/${instructorID}`,{
        "to":refSender.current.value,
        "subject":refSubject.current.value,
        "content":refMessage.current.value
      })
      
      console.log(res)
        console.log("Sent")
    }
  return (
    <div className='inbox-instructor'>
      <InstructorSidebar/>
      <div className="main-content-compose">
        <Navbar/>
        <div className="page-content-compose">
            <h1 className="heading-compose">Compose A Message</h1>
            <div className="compose-area">
            <div className="mb-3">
              <label htmlFor='exampleFormControlInput2' className="form-label">Enter the Username</label>
              <input type="text" id="exampleFormControlInput2" placeholder="Subject" autoComplete="off" ref={refSender} defaultValue={sender} />
            </div>
            <div className="mb-3">
              <label htmlFor='exampleFormControlInput2' className="form-label">Enter the Subject</label>
              <input type="text" id="exampleFormControlInput2" placeholder="Subject" autoComplete="off" ref={refSubject} defaultValue={subject} />
            </div>
                <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Write A Message</label>
            <textarea className="form-control course-description" id="exampleFormControlTextarea1"  rows="10" placeholder='Message' ref={refMessage}></textarea>
            <div className="btn-for-send">
              <div className="action-sent">
               <Link to={`/instructor/${instructorID}/inbox`}><button className="btn-primary btn mx-3 px-3">Inbox</button></Link> 
               <Link to={`/instructor/${instructorID}/inbox/sent`}> <button className="btn-primary btn mx-3 px-3">Sent Items</button></Link>
                <button className="btn-primary btn mx-3 px-3" onClick={handleSend}>Send</button>
              </div>
               
            </div>
            </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default ComposeInstructor
