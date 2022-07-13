import React, {useState,useRef,useEffect} from 'react'
import './inbox.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataTable from 'react-data-table-component'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'




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
                JSON.parse(JSON.stringify(data))['content']
            }
        </div>
    )
}

function Inbox() {
  

    const {adminID}=useParams()
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

    const dataRef=useRef(null)
    const filterRef=useRef(null)
    const [data,setData]=useState([])

    const genData=async()=>{
        // let d=[]
        // for(let i =0;i<40;++i){
        //     d[i]={sender:`n${i}`,Subject : `s${i}`, Time : `t${i}`, messageID: `id${i}`, status: i%2===0?"not-read":"read" ,message:`m${i}`}
        // }
        // dataRef.current=d
        // filterRef.current=d
        const res =await axios.get(`http://192.168.51.89:5001/messages/admin/${adminID}`)
        console.log(res)
        setData(res.data.msg)
    }
    const iRef= useRef(null)
    const [search,setSearch]=useState('')
    const [filteredContent,setFilteredContent]=useState([])
    
    useEffect(()=>{
      genData()
    },[])

    const columns=[
      {
          name: "Sender",
          width: "150px",
          selector :(row)=>row.from
          },
          {
              name: "Subject",
              width: "900px",
              selector: (row)=>row.subject              
            },
          {
              name: "Time",
              width: "150px",
              selector: (row)=>row.timestamp
          },
          {
              name : "Actions",
              width: "200px",
              cell: (row)=> {return <div className="Action-buttons"><button className="Delete-button">Delete</button><Link to={`/${adminID}/inbox/compose`} state={{sender: row.from ,subject: `Re: ${row.subject}`}}><button className="Reply-button">Reply</button></Link> </div>}
          }
      ]
    
// const columns=[
//     {
//         name: "Sender",
//         width: "150px",
//         selector :(row)=>{
//             return row.status==="not-read"?<p className="bold-text">{row.sender}</p>:<p className="read-text">{row.sender}</p> 
//         },
//         },
//         {
//             name: "Subject",
//             width: "900px",
//             selector: (row)=>{
//                return row.status==="not-read"?<p className="bold-text">{row.Subject}</p>:<p className="read-text">{row.Subject}</p>  
//             },
//         },
//         {
//             name: "Time",
//             width: "150px",
//             selector: (row)=>{
//                 return row.status==="not-read"?<p className="bold-text">{row.Time}</p>:<p className="read-text">{row.Time}</p> 
//             },
//         },
//         {
//             name : "Actions",
//             width: "200px",
//             cell: (row)=>{
//                 return <div className="Action-buttons"><button className="Delete-button">Delete</button><button className="Reply-button">Reply</button> </div>
//             },
//         }
//     ]

// useEffect(()=>{
//     const result = dataRef.current.filter((dat)=>{
//     return dat.sender.toLowerCase().match(search.toLowerCase())
//   })
//     const result2=dataRef.current.filter((dat)=>{
//       return dat.Subject.toLowerCase().match(search.toLowerCase())
//     })
//   const result3=result
//   for (let i of result2){
//     if(!result.includes(i)){
//       result3.push(i)
//     }
//   }
//   console.log(result3)
//   filterRef.current=result3
//   console.log(search)
//   setFilteredContent(result)
// //   filter
// },[search])

  return (
    <div className='inbox'>
        <Sidebar/>
     <div className="inbox-content">
        <Navbar/>
        
        <div className="main-content-inbox">
       
            <h1 className="inbox-header">Inbox</h1>
            <div className="options-inbox">
            <div className="left-inbox">
            <Link to={`/${adminID}/inbox/sent`}><button className="btn-primary btn mx-3 my-3">View Sent</button></Link>
            <Link to={`/${adminID}/inbox/compose`} state={{sender: '',subject:''}}> <button className="btn-primary btn mx-3 my-3">Compose</button></Link>
            </div>
            </div>
            
            <DataTable columns={columns}
            data={data}
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

export default Inbox
