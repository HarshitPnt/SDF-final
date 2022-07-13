import React,{useState,useRef,useEffect} from 'react'
import Student_sidebar from '../../../components/student-sidebar/Student_sidebar'
import './studentdashboard.css'
import CourseCard from '../../../components/courseCard/CourseCard'
import {ArrowFatLeft,ArrowFatRight,UploadSimple,DownloadSimple} from 'phosphor-react'
import DataTable from 'react-data-table-component'
import {useParams} from 'react-router-dom'


const columns=[
    {
        name: "Course",
        width: "15%",
        selector :(row)=>row.course,
        },
        {
            name: "Name",
            width: "25%",
            selector: (row)=>row.name,
        },
        {
            name: "Due Time",
            width: "20%",
            selector: (row)=>row.dueTime,
            sortable: true
        },
        {
            name: "Download",
            width: "20%",
            cell: row=>{
                return <div>
                <label htmlFor="file">
                Download:<DownloadSimple size={25} color="#9e0089" weight="light" className="icon-upload" />
            </label><input type="file" id="file" />
          </div>
            }
        },
        {
            name:"Upload",
            width: "20%",
            cell: (row)=>{
                
               return row.upload===true? <div>
                    <label htmlFor="file">
                    Upload File:<UploadSimple size={25} color="#9e0089" weight="light" className="icon-upload" />
                </label><input type="file" id="file" />
              </div>:"--"
            }
        },
           
        
    ]

function StudentDashboard() {

    const dataRef=useRef(null)
    const filterRef=useRef(null)

    const genData=()=>{
        let d=[]
        for(let i =0;i<40;++i){
            d[i]={course:`c${i}`,name : `n${i}`, dueTime : `t${i}`,upload: i%2===0?true:false, download:"file"}
        }
        dataRef.current=d
        filterRef.current=d
    }

    const resRef=useRef(null)
    const recRef=useRef(null)
    const [filteredContent,setFilteredContent]=useState([])

    const scroll=(shift,ref)=>{
        console.log(shift)
        ref.current.scrollLeft+=shift
    }


    const customStyles={
        head: {
          style: {
            color: "grey",
            fontSize: '25px',
            fontWeight: 500,
          },
        },
        rows: {
          style: {
            fontSize: '20px',
            fontWeight: 400,
            color: "black",
            backgroundColor: "white",
            minHeight: '72px',
            '&:not(:last-of-type)': {
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
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
			height: '40px',
			width: '40px',
			padding: '8px',
			margin: 'px',
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
    const { studentID } =useParams();
    const [search,setSearch]=useState('')
    const handleSearch=async()=>{
            setSearch(iRef.current.value)
    }

    useEffect(()=>{
        const result = dataRef.current.filter((dat)=>{
        return dat.name.toLowerCase().match(search.toLowerCase())
      })
        const result2=dataRef.current.filter((dat)=>{
          return dat.course.toLowerCase().match(search.toLowerCase())
        })
        const result4=dataRef.current.filter((dat)=>{
            return dat.dueTime.toLowerCase().match(search.toLowerCase())
          })
      const result3=result
      for (let i of result2){
        if(!result.includes(i)){
          result3.push(i)
        }
      }
      for(let i of result4){
        if(!result3.includes(i)){
            result3.push(i)
        }
      }
      console.log(result3)
      filterRef.current=result3
      console.log(search)
      setFilteredContent(result3)
    //   filter
    },[search])

    const iRef=useRef(null)
  return (
    <div className="stu-dash" onLoad={
        genData()
    }>
        <div className="side-stu-dash">
     <Student_sidebar/>    
        </div> 
    <div className="content-stu-dash">
        <h2 className="welcome-stu-dash">Welcome back {studentID}!</h2>
        <h3 className="resume-title">Resume from where you left</h3>
            <div className="resume-bar" id="1" ref={resRef}>
      
                {/* <img src="" alt="" /> */}
                <CourseCard title={"Course1"} current={"Current1"}/>
                <CourseCard title={"Course2"} current={"Current2"}/>
                <CourseCard title={"Course3"} current={"Current3"}/>
                <CourseCard title={"Course4"} current={"Current4"}/>
                <CourseCard title={"Course5"} current={"Current5"}/>
                <CourseCard title={"Course6"} current={"Current6"}/>
                <CourseCard title={"Course7"} current={"Current7"}/>
                <CourseCard title={"Course8"} current={"Current8"}/>
                <CourseCard title={"Course9"} current={"Current9"}/>
                <CourseCard title={"Course10"} current={"Current10"}/>
                <CourseCard title={"Course11"} current={"Current11"}/>
            </div>
    <div className="arrows">
            <ArrowFatLeft className="Left-arrow" size={32} color="#812222" weight="duotone" onClick={()=>{scroll(-1500,resRef)}
            }/>
            <ArrowFatRight className="Right-arrow" size={32} color="#812222" weight="duotone" onClick={()=>{scroll(1500,resRef)}} />
    </div>
        <h2 className="resume-title">Due Assignments/Quizes</h2>
        <div className="to-do" id="3">
            <div className="center-box">
                <DataTable columns={columns}
                data={filteredContent===[]?filterRef.current:filteredContent}
                fixedHeader
                fixedHeaderScrollHeight='550px'
                pagination
                customStyles={customStyles}
                subHeader
      subHeaderComponent={
      <input ref={iRef} type="Text" placeholder='Search Here' className="form-control w-25"
      onChange={handleSearch}/>
      }/>
            </div>
        </div>
        <h2 className="resume-title recommended-title" >Recommended Courses</h2>
    <div className="recommended-bar resume-bar" ref={recRef} id="2">
        <CourseCard title={"Course1"} current={"Current1"}/>
        <CourseCard title={"Course2"} current={"Current2"}/>
        <CourseCard title={"Course3"} current={"Current3"}/>
        <CourseCard title={"Course4"} current={"Current4"}/>
        <CourseCard title={"Course5"} current={"Current5"}/>
        <CourseCard title={"Course6"} current={"Current6"}/>
        <CourseCard title={"Course7"} current={"Current7"}/>
        <CourseCard title={"Course8"} current={"Current8"}/>
        <CourseCard title={"Course9"} current={"Current9"}/>
        <CourseCard title={"Course10"} current={"Current10"}/>
        <CourseCard title={"Course11"} current={"Current11"}/>
    </div>
    <div className="arrows rec-arrow">
        <ArrowFatLeft className="Left-arrow" size={32} color="#812222" weight="duotone" onClick={()=>{scroll(-1500,recRef)}
        }/>
        <ArrowFatRight className="Right-arrow" size={32} color="#812222" weight="duotone" onClick={()=>{scroll(1500,recRef)}} />
    </div>
    
    </div>
    </div>
    
  )
}

export default StudentDashboard
