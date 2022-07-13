import React,{useState,useRef,useEffect} from 'react'
import './datatable.css'
import DataTable from 'react-data-table-component'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'

export default function DatatableStudents() {
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
    // const data=useRef([]);
    const [data,setData]=useState([])
    const [search,setSearch]=useState("")
    const iRef=useRef(null)
    // const filter=useRef([])
    const [filteredContent,setFilteredContent]=useState([])
    // const dataRef=useRef(null)
  
    // const GenData=()=>{
    //   let d=[]
  
    //   for(let i=0;i<19;++i){
    //     d[i]={id:i,
    //     n:`n${i}`
    //     ,t:`t${i}`,
    //     c:`c${i}`,
    //     p:`p${i}`,
    //     e:`e${i}`}
    //   }
    //   return d
    // }
  
    const getData=async()=>{
      try{
        // const resp=GenData()
        // data.current=resp
        // filter.current=resp
        let response =await axios.get("http://192.168.51.89:5001/students")
         console.log(response)
         setData(response.data)
      }
      catch(error){
      console.log(error)
      }
    }

    useEffect(()=>{
      getData()
    },[])
  
    const columns=[
      {
        name: "Username",
        selector: (row)=>row.username,
        sortable: true,
      },
      // {
      //   name: "Subscription Type",
      //   selector: (row)=>row.t,
      //   sortable: true,
      // },
      {
        name: "Courses Taken",
        selector: (row)=>row.courses.length,
        sortable: true,
      },
      // {
      //   name: "",
      //   selector: (row)=>row.p,
      //   sortable: true,
      // },
      {
        name: "Email ID",
        selector :(row)=>row.email
      },
      {
        name: "Phone number",
        selector:(row)=>row.phoneno
      }
      ,
      {
        name: "Actions",
        selector: (row)=><button className="btn btn-primary color"><Link to={`/${adminID}/user/student/${row.id}`}>View</Link></button>
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
  const {adminID}=useParams()
    return (
      <div className="Hello" >
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