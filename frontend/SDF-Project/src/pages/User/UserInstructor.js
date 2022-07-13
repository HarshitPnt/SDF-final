import React, { useEffect,useState,useRef } from 'react'
import './user.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import CoursesDatatable from '../../components/datatable/CoursesDatatable'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { getDatasetAtEvent } from 'react-chartjs-2'
import FileBase64 from 'react-file-base64'


function UserInstructor() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phoneno,setPhoneno]=useState('')
  const [item,setItem]=useState({})
  const [expertise,setExpertise]=useState('')

const handleMessage=async()=>{
  let resp=await axios.post(`http://192.168.51.89:5001/messages/admin/${adminID}`,{
    "to":name,
    "subject":refSubject.current.value,
    "content":refMessage.current.value
  })
  console.log(resp)
  refSubject.current.value=''
  refMessage.current.value=''
}

// const columns=[
//   {
//     name:
//   }
// ]
const [courses,setCourses]=useState(0)
const [data,setData]=useState([])
const getData=async()=>{

  
    let res=await axios.get(`http://192.168.51.89:5001/profs/${instructorID}`)
    let course=await axios.get(`http://192.168.51.89:5001/profs/course/${instructorID}`)
    // console.log(course)
      setData(course.data.crs)
      setCourses(course.data.crs.length)
    // ,{params:
    // {_id:instructorID}}

    console.log(res)
    // a=res.data.find((item)=>{
    //   return item.id==instructorID
    // })
    // console.log(a)
    setName(res.data.username)
    setEmail(res.data.email)
    setExpertise(res.data.expertise)
    setPhoneno(res.data.phoneno)

}
 const refSubject=useRef(null)
 const refMessage=useRef(null)
  const {adminID,instructorID}=useParams()
  useEffect(()=>{
    getData()
  },[instructorID])
  return (
    <div className="User">
        <div className="side"><Sidebar/></div>
    <div className="userContainer">
        <Navbar/>
        <div className="pagecontent">
        <div className="top-container py-4">
          <div className="left mx-3">
            <div className="information px-4 py-4">
              <div className="info-left">
                <h2 className="Info">Information</h2>
                {/* <FileBase64
                   multiple={ false }
                  onDone={ ({base64})=>setItem({image : base64}) } /> */}
                  <img className="profile-picture" src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="profile-picture" />
              </div>
              <div className="info-right">
                <h3 className="Name">{name}</h3>
                <div className="item"><strong> Email:</strong>{email}</div>
                <div className="item"><strong>Phone-No:</strong>{phoneno}</div>
                <div className="item"><strong>Expertise:</strong>{expertise}</div>
                <div className="item"><strong>Courses-taught:</strong>{courses}</div>
                <div className="item"><strong>Rating:</strong>5/5</div>
              </div>
            </div>
          </div>

          <div className="right">
              <div className="email">
                <p style={{color: "black"}}>Type to message {name}</p>
              <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label" >Enter Subject</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject" ref={refSubject}/>
              </div>
              <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Compose the message</label>
              <textarea className="form-control field-edit" id="exampleFormControlTextarea1" rows="3" ref={refMessage}></textarea>
              </div>
              <button className="btn-primary btn" onClick={handleMessage}>Send</button>
              </div>
          </div>

        </div>

        <div className="middle-container py-6 my-4">
          <CoursesDatatable/>
        </div>

        <div className="bottom-container py-4">
         
        </div>
        </div>
        

    </div>
    </div>
  )
}

export default UserInstructor
