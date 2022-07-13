import React,{useState,useEffect,useRef} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import CoursesDatatable from '../../components/datatable/CoursesDatatable'
import './Courses.css'
import DataTable from 'react-data-table-component'
import { RadioButton } from 'phosphor-react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Courses() {

    const [data,setData]=useState([{name:'-',profs:'-',start_date: '-', end_date: '-'}])
    const customStyles={
        head: {
          style: {
            color: "black",
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

    const dataRef=useRef(null)
    const genData= async ()=>{
        let d=[]
        for(let i =0;i<20;++i){
            d[i]={n:`n${i}`,i:`i${i}`,time:`time${i}`,t:`t${i}`,status:`st${i}`,stud: `s${i}`}
        }
        dataRef.current=d;
        const resp=await axios.get("http://192.168.51.89/courses")
        console.log(resp)
        setData(resp.data.crs)
        //console.log(dataRef.current)
    }


    const columns=[
        {
            name: "Course Name",
            selector: row=>row.name
        },
        {
            name: "Course instructor",
            selector: row=>row.profs
        },
        {
            name: "Start Date",
            selector: row=>row.start_date,
            sortable : true
        },
        {
            name: "End Date",
            selector: row=>row.end_date,
        
        },
        // {
        //     name: "Course Status",
        //     selector: row=>{
        //       const current = new Date()
        //       const start=new Date(row.start_date)
        //       const time_passed=current.getTime()-start.getTime()
        //       const end=new Date(row.end_date)
        //       const total=end.getTime()-start.getTime()
        //       return (time_passed/total>1?100:time_passed/total*100)
        //     }
        // },
        // {
        //     name: "Students",
        //     selector: row=> row.stud,
        //     sortable: true
        // },
        {
            name: "Actions",
            cell: row=>{return <><button className="Deactivate">Deactivate</button> <button className="View-courses"> View</button></>}
        }
    ]
  return (
    <div>
      <div className="course">
        <div className="side">
            <Sidebar/>
        </div>
        <div className="top-course">
            <Navbar/>
            <div className="pagecontent-course">
                <h2 className="title-course">Course Table</h2>
                <DataTable columns={columns}
                data={data}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='700px'
                customStyles={customStyles}
                highlightOnHover/>
                {/* <CoursesDatatable/> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
