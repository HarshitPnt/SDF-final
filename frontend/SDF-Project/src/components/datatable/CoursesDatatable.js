import React,{useState,useEffect,useRef} from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'

function CoursesDatatable() {
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
        minHeight: '48px',
        '&:not(:last-of-type)': {
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
        },
      },

  }
}
    const [data,setData]=useState([])

    const [search,setSearch]=useState("")
    const [filteredContent,setFilteredContent]=useState([])
   
    const dataRef=useRef([])
    async function genData(){
        // let d=[]
        // for(let i = 0; i< 40;++i){
        //     d[i]={course_Name: `cn${i}`, start_date: `sd${i}`, end_date: `ed${i}`, status: `${i===1?"pending":i===2?"inactive":"over"}`, students:`s${i}`,TAs: `t${i}`}
        // }
        // // console.log("object")
        // dataRef.current=d
        // // console.log(dataRef.current)
        // // console.log(d)
        const response = await axios.get("http://192.168.51.89:5001/courses")
        console.log(response)
    }
    const columns=[
      {
        name: "Name",
        selector: row=>row.course_Name
      },
      {
        name: "Start Date",
        selector: row=>row.start_date
      },
      {
        name: "End Date",
        selector: row=>row.end_date
      },
      {
        name: "Status",
        selector: row=><p className={row.status==="pending"?"pending":row.status==="inactive"?"inactive":"over"}>{row.status}</p>
      },
      {
        name: "Students",
        cell: row=>row.students
      }
      ,{
        name: "TAs",
        selector: row=>row.TAs
      }

      
    
    ]
    useEffect(()=>{
      const result = dataRef.current.filter((dat)=>{
        //console.log(dat)
        return dat.course_Name.toLowerCase().match(search.toLowerCase())
      })
      console.log(search)
      setFilteredContent(result)
    },[search])

    useEffect(()=>{
      genData()
    },[])
  return (
    <>
    <h2>Courses Offered</h2>
    <DataTable columns={columns}
    data={data}
    pagination
    fixedHeaderScrollHeight='300px'
    fixedHeader
    customStyles={customStyles}
    subHeader
      subHeaderComponent={
      <input  type="Text" placeholder='Search Here' className="form-control w-25"
      onChange={(e)=>setSearch(e.target.value)}/>
      }/>
    </>
  )
}

export default CoursesDatatable
