import React,{useState,useRef, useEffect} from 'react'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import {User,Student,ChalkboardTeacher,CurrencyInr,BookOpen,Book,Books} from 'phosphor-react'
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'



function Home() {
  const {adminID}=useParams()
  const navigate=useNavigate()
  const [data,setData]=useState([])
  const getData=async()=>{

    const resp=await axios.get(`http://192.168.51.89:5001/admins/${adminID}`)
    console.log(resp)
    if(resp.data.message=="Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer"||resp.data==''){
      navigate('/login')
    }
    const resp2=await axios.get('http://192.168.51.89:5001/courses/counts')
    console.log(resp2)
    setData(resp2.data)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="home">
        <div className="side"><Sidebar/></div>
    <div className="homeContainer">
        <Navbar/>
        <p className="center">Users</p>
        <div className="d-flex wid">
        <Widgets type="Students" count={data.student_count} perc="30" money="no" icon={<Student className="icon color1" size={32} color="#0b0a0a" weight="duotone" />}/>
        <Widgets type="Teachers" count={data.prof_count} perc="50" money="no" icon={<ChalkboardTeacher className="icon color2" size={32} color="#0b0a0a" weight="duotone" />}/>
        <Widgets type="TAs" count="N/A" perc="-90" money="no" icon={<User className="icon color3" size={32} color="#0b0a0a" weight="duotone" />}/>
        </div>
        <p className="center">Courses</p>
        <div className="d-flex wid">
        <Widgets type="Total Courses" count={data.course_count} perc="0" money="no" icon={<Books className="icon" size={32} color="#0b0a0a" weight="duotone" />}/>
        <Widgets type="Running Courses" count={data.active_course_count} perc="0" money="no" icon={<BookOpen className="icon color2" size={32} color="#0b0a0a" weight="duotone" />}/>
        <Widgets type="Inactive Courses" count={data.inactive_course_count} perc="0" money="no" icon={<Book className="icon color3" size={32} color="#0b0a0a" weight="duotone" />}/>
        </div>
        <p className="center">Enrolled</p>
        <div className="d-flex wid">
        <Widgets type="Subscribed Students" count="N/A" perc="20" money="yes" icon={<CurrencyInr className="icon" size={32} color="#0b0a0a" weight="duotone" />}/>
        <Widgets type="Audit Students" count="N/A" perc="70" money="yes" icon={<CurrencyInr className="icon color2" size={32} color="#0b0a0a" weight="duotone" />}/>
        <Widgets type="Free trial" count="N/A" perc="-10" money="yes" icon={<CurrencyInr className="icon color3" size={32} color="#0b0a0a" weight="duotone" />}/>
        </div>
    </div>
    </div>
  )
}

export default Home
