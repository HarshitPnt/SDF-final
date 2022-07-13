import React,{useEffect,useState,useRef} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import {Link,useParams} from 'react-router-dom'
import DataTable from 'react-data-table-component'
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


function Sent() {

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

    const {adminID}=useParams()
    // const dataRef=useRef(null)
    // const filterRef=useRef(null)
    const [data,setData]=useState([])

    const genData=async()=>{
        // let d=[]
        // for(let i =0;i<40;++i){
        //     d[i]={sender:`n${i}`,Subject : `s${i}`, Time : `t${i}`, messageID: `id${i}`, status: i%2===0?"not-read":"read" ,message:`m${i}`}
        // }
        // dataRef.current=d
        // filterRef.current=d
        let response=await axios.get(`http://192.168.51.89:5001/messages/sent/admin/${adminID}`)
        // console.log(response.data.msg)
        setData(response.data.msg)

   }
    const iRef= useRef(null)
    const [search,setSearch]=useState('')
    const [filteredContent,setFilteredContent]=useState([])
    
const columns=[
    {
        name: "Receiver",
        width: "150px",
        selector :(row)=>{
            return row.to
        },
        },
        {
            name: "Subject",
            width: "900px",
            selector: (row)=>{
               return row.subject
            },
        },
        {
            name: "Time",
            width: "150px",
            selector: (row)=>{
                return row.timestamp
            },
        }
    ]

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

useEffect(()=>{
  genData()
},[])
  return (
    <div className='inbox'>
        <Sidebar/>
     <div className="inbox-content">
        <Navbar/>
        
        <div className="main-content-inbox">
       
            <h1 className="inbox-header" >Sent Items</h1>
            <div className="action-sent">
               <Link to={`/${adminID}/inbox`}><button className="btn btn-primary mx-3 my-3">Inbox</button></Link> 
               <Link to={`/${adminID}/inbox/compose`} state={{sender: '',subject:''}}><button className="btn-primary btn mx-3 my-3">Compose</button></Link> 
            </div>
            <div className="sent-table">
                <DataTable columns={columns}
                data={data}
                pagination
                fixedHeader
                highlightOnHover
                fixedHeaderScrollHeight='750px'
                subHeader
                subHeaderComponent={
                    <input ref={iRef} type="Text" placeholder='Search Here' className="form-control w-25"
                    onChange={async ()=>{
                    setSearch(iRef.current.value)
                    }}>
                    </input>}
                subHeaderAlign="center"
                expandableRows
                expandableRowsComponent={MyComponent}
                customStyles={customStyles}
                />
            </div>
        </div>
        </div>
        </div>
  )
}

export default Sent
