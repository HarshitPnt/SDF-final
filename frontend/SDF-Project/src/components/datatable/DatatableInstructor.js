import React ,{useEffect,useState,useRef} from 'react'
import DataTable from 'react-data-table-component'
import './datatable.css'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'
import FileBase64 from 'react-file-base64'



export default function DatatableInstructor() {
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

  }
}
  const { adminID }=useParams()
  // const data=useRef([]);
  const [search,setSearch]=useState("")
  const iRef=useRef(null)
  const filter=useRef([])
  const [filteredContent,setFilteredContent]=useState([])
  // const dataRef=useRef(null)

  // const GenData=()=>{
  //   // let d=[]

  //   // for(let i=0;i<19;++i){
  //   //   d[i]={id:i,
  //   //   n:`n${i}`
  //   //   ,t:`t${i}`,
  //   //   c:`c${i}`,
  //   //   p:`p${i}`,
  //   //   e:`e${i}`}
  //   // }
  //   // return d

  // }
  const [data,setData]=useState([]);
  const getData=async()=>{
    try{
      // const resp=GenData()
      // data.current=resp
      // filter.current=resp
      let response =await axios.get("http://192.168.51.89:5001/profs")
      setData(response.data)

    }
    catch(error){
    console.log(error)
    }
  }

  // const {instructorID} =useParams()

  const columns=[
    {
      name: "Name",
      selector: (row)=>row.username,
      sortable: true,
    },
    {
      name: "ID", //Hours taught
      selector: (row)=>row.id,
      sortable: true,
    },
    {
      name: "Courses offering",
      selector: (row)=>"0",
      sortable: true,
    },
    {
      name: "Progress/Course Status",
      selector: (row)=>"0",
      sortable: true,
    },
    {
      name: "Email ID",
      selector :(row)=>row.email
    },

    {
      name: "Actions",
      selector: (row)=><button className="btn btn-primary color"><Link to={`/${adminID}/user/instructor/${row.id}`}>View</Link></button>
    }
] 
useEffect(()=>{
   
     const result = data.filter((dat)=>{
    return dat.username.toLowerCase().match(search.toLowerCase())
  })
    // const result2=data.current.filter((dat)=>{
    //   return dat.c.toLowerCase().match(search.toLowerCase())
    // })
  // const result3=result
  // for (let i of result2){
  //   if(!result.includes(i)){
  //     result3.push(i)
  //   }
  // }
  // filter.current=result3
  // console.log(search)
  setFilteredContent(result)
},[search])

// useEffect(()=>{
//   console.log("Consoling Filtered Content")
//   console.log(filteredContent)
// },[filteredContent])

useEffect(()=>{
  getData()
},[])

  return (
    <div className="Hello">
      <DataTable className="fonts" columns={columns}
      data={search===''?data:filteredContent}
      fixedHeader
      fixedHeaderScrollHeight='700px'
      pagination
      highlightOnHover
      title={"List of Instructors"}
      subHeader
      subHeaderComponent={
      <input ref={iRef} type="Text" placeholder='Search Here' className="form-control w-25"
      onChange={async ()=>{
        setSearch(iRef.current.value)
      }}>
      </input>}
      subHeaderAlign={"center"}
      customStyles={customStyles}
      />
      </div>
      )
}
