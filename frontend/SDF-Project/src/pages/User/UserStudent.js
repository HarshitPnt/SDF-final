import React,{useState,useRef,useEffect} from 'react'
import './userstudent.css'
import Student_sidebar from '../../components/student-sidebar/Student_sidebar'
import CoursesDatatable from '../../components/datatable/CoursesDatatable'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import {Link,useParams} from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

function UserStudent() {

  const customStyles={
    head: {
      style: {
        color: "grey",
        fontSize: '20px',
        fontWeight: 500,
      },
    },
    rows: {
      style: {
        fontSize: '16px',
        fontWeight: 400,
        color: "black",
        backgroundColor: "white",
        minHeight: '60px',
        '&:not(:last-of-type)': {
          borderBottomStyle: 'solid',
          borderBottomWidth: '2px',
        },
      },

  },
  pagination: {
style: {
  //color: theme.text.secondary,
  fontSize: '20px',
  minHeight: '56px',
  //backgroundColor: theme.background.default,
  borderTopStyle: 'solid',
  borderTopWidth: '1px',
  //borderTopColor: theme.divider.default,
},
pageButtonsStyle: {
  borderRadius: '50%',
  height: '30px',
  width: '30px',
  padding: '8px',
  margin: '1px',
  cursor: 'pointer',
  transition: '0.4s',
  //color: theme.button.default,
  //fill: theme.button.default,
  //backgroundColor: 'transparent',
  '&:disabled': {
    cursor: 'unset',
    //color: theme.button.disabled,
    //fill: theme.button.disabled,
  },
  '&:hover:not(:disabled)': {
    //backgroundColor: theme.button.hover,
  },
  '&:focus': {
    outline: 'none',
    //backgroundColor: theme.button.focus,
  },
},
}
}

  const dataRef=useRef([])
  const filterRef=useRef([])
  const iRef=useRef(null)
  const [search,setSearch]=useState('')
  const [filteredContent,setFilteredContent]=useState([])
  const {adminID,studentID} =useParams()
  const [data,setData]=useState({name:"",username:"",date:"",email:"",courses:[]})
  const genData= async ()=>{
    // let data=[]
    // console.log(adminID)
    // console.log(studentID)
    // for(let i =0;i<40;++i){
    //   data[i]={courseName:`c${i}`, enrollDate: `d${i}`, courseStatus: `cs${i}`, learningStatus: `${i/40*100}`}
    //     }
    //   dataRef.current=data
    //   filterRef.current=data
    //    console.log(filterRef.current)
    //   //  console.log(loc)
    const res =await axios.get(`http://192.168.51.89:5001/students/${studentID}`)
    console.log(res)
    setData(res.data)
    console.log(res.data.courses)
  }

useEffect(()=>{
  genData()
},[])

//   useEffect(()=>{
//     const result = dataRef.current.filter((dat)=>{
//     return dat.courseName.toLowerCase().match(search.toLowerCase())
//   })
    
//   filterRef.current=result
//   console.log(search)
//   setFilteredContent(result)
// },[search])

// useEffect(()=>{
//   console.log("Consoling Filtered Content")
//   console.log(filteredContent)
// },[filteredContent])
  const columns=[
    {
      name:"Course Name",
      selector: row=>"Name is an object"
    }
    ,
    {
      name:"Enroll Date",
      selector: row=>"To be added"
    },
    {
      name: "Course Staus",
      selector: row=>row.marks
    }
    ,{
      name:"Learning Status",
      selector: row=>"To be added"
    }
  ]
  return (
    <div className="side-stu-user">
      <Sidebar/>
      <div className="navbar-admin">
      <Navbar/>
      </div>
      <div className="page-content-title-stu">
        <h1 className="welcome-stu-profile">
          Profile Page
        </h1>
        <div className="page-content-user-stu">
        <div className="left-stu">
            <div className="information-card-student">
              <div className="info-left-stu mx-4">
                <h2 className="info-stu">
                  Information
                </h2>
                <img className="profile-picture-stu" src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="profile-picture" />
                <h3 className="profile-picture-stu-title">
                    Profile Picture
                </h3>
              </div>
              <div className="info-right-stu mx-4">
                <div className="items-stu-info">
                  <p className="item-stu-info">
                  <span className="title-stu-info">Name:</span><span className="entry-stu-info">To be added</span>
                  </p>
                  <p className="item-stu-info">
                  <span className="title-stu-info">UserName:</span><span className="entry-stu-info">{data.username}</span>
                  </p>
                  <p className="item-stu-info">
                  <span className="title-stu-info">Email:</span><span className="entry-stu-info">{data.email}</span>
                  </p>
                  <p className="item-stu-info">
                  <span className="title-stu-info">Courses Taken:</span><span className="entry-stu-info">{data.courses.length}</span>
                  </p>
                  <p className="item-stu-info">
                  <span className="title-stu-info">Joined On:</span><span className="entry-stu-info">To be added</span>
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div className="right-stu">
            <DataTable columns={columns}
            data={data.courses}
            pagination
            highlightOnHover
            fixedHeader
            fixedHeaderScrollHeight='300px'
            subHeader
            title={"Enrolled Courses"}
            subHeaderComponent={
              <input ref={iRef} type="Text" placeholder='Search Here' className="form-control w-50"
      onChange={async ()=>{
        setSearch(iRef.current.value)
      }}>
      </input>
            }
            subHeaderAlign='center'
            customStyles={customStyles}/>
        </div>
        
        </div>
        <div className="message-stu">
          <div className="mb-3 custom-width-message">
          <label for="exampleFormControlInput1" class="form-label" styles={{fontSize: "20px"}}>Enter the subject</label>
          <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="Subject" autocomplete="off" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label" styles={{fontSize: "15px"}}>Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" cols="90" placeholder='Message'></textarea>
            </div>
          <div className="btn-send-profile"><button className="btn-primary btn btn-send-profile-btn">
            Send</button></div>
        </div>
        
      </div>
    </div>
  )
}

export default UserStudent
