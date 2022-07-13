import React,{useEffect,useState,useRef} from 'react'
import InstructorSidebar from '../../components/InstuctorSidebar/InstructorSidebar'
import Navbar from '../../components/navbar/Navbar'
import {Link} from 'react-router-dom'
import './doubts.css'
import DataTable from 'react-data-table-component'

const columns=[
    {
        name: "Course",
        width: "150px",
        selector :(row)=>{
            return row.status==="not-read"?<p className="bold-text">{row.courseName}</p>:<p className="read-text">{row.courseName}</p> 
        },
        },
        {
            name: "Sender",
            width:"250px",
            selector: row=>row.status==="not-read"?<p className="bold-text">{row.sender}</p>:<p className="read-text">{row.sender}</p> 
            
        },
        {
            name: "Subject",
            width: "700px",
            selector: (row)=>{
               return row.status==="not-read"?<p className="bold-text">{row.Subject}</p>:<p className="read-text">{row.Subject}</p>  
            },
        },
        {
            name: "Time",
            width: "150px",
            selector: (row)=>{
                return row.status==="not-read"?<p className="bold-text">{row.Time}</p>:<p className="read-text">{row.Time}</p> 
            },
        },
        
        {
            name : "Actions",
            width: "200px",
            cell: (row)=>{
                return <div className="Action-buttons"><button className="Delete-button" style={{height:"50px",width:"120px"}}>Reply to all</button><Link to="/instructor/inbox/compose" state={{sender: row.sender}}><button className="Reply-button" style={{height:"50px",width:"120px"}}>Direct Message</button></Link> </div>
            },
        }
    ]


function MyComponent({data}){
    return (
        <div className="mycomp">
            { <h5 className="Message-title" /*onLoad={()=>{
                console.log(columns[1].selector)
                columns[1].selector=(row)=>{
                    return <p className="read-text">{row.Subject}</p>
                }
                console.log(columns[1].selector)
            }}*/>Message</h5> }
            {
                JSON.parse(JSON.stringify(data))['message']
            }
        </div>
    )
}

function Doubts({role}) {

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
            minHeight: '80px',
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
    const filterRef=useRef(null)

    const genData=()=>{
        let d=[]
        for(let i =0;i<40;++i){
            d[i]={sender:`n${i}`,Subject : `s${i}`, Time : `t${i}`, messageID: `id${i}`, status: i%2===0?"not-read":"read" ,message:`m${i}`,courseName:`cn${i}`}
        }
        dataRef.current=d
        filterRef.current=d
    }
    const iRef= useRef(null)
    const [search,setSearch]=useState('')
    const [filteredContent,setFilteredContent]=useState([])
    useEffect(()=>{
        const result = dataRef.current.filter((dat)=>{
        return dat.sender.toLowerCase().match(search.toLowerCase())
      })
        const result2=dataRef.current.filter((dat)=>{
          return dat.courseName.toLowerCase().match(search.toLowerCase())
        })
      const result3=result
      for (let i of result2){
        if(!result.includes(i)){
          result3.push(i)
        }
      }
      console.log(result3)
      filterRef.current=result3
      console.log(search)
      setFilteredContent(result)
    //   filter
    },[search])
    
  
    return (
    <div className="doubts-inst" onLoad={genData()}>
      <InstructorSidebar/>
      <div className="main-content-doubts">
        <Navbar/>
        <div className="page-content-doubts">
        <h1 className="inbox-header" onLoad={genData()}>View All The Doubts</h1>
            
            <DataTable columns={columns}
            data={filteredContent===[]?filterRef.current:filteredContent}
            selectableRows
            selectableRowsHighlight
            pagination
            fixedHeader
            fixedHeaderScrollHeight='550px'
            expandableRows
            expandableRowsComponent={MyComponent}
            customStyles={customStyles}
            highlightOnHover
            subHeader
            subHeaderComponent={
            <input ref={iRef} type="Text" placeholder='Search Here' className="form-control w-25"
            onChange={async ()=>{
            setSearch(iRef.current.value)
            }}>
            </input>}
            subHeaderAlign={"center"}
            />
        </div>
      </div>
    </div>
  )
}

export default Doubts
