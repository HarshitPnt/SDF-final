import React,{useState,useEffect,useRef} from 'react'
import './new.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import {UploadSimple} from 'phosphor-react'
import axios from 'axios'

function NewTA(props) {
  const [file,setFile]=useState('')
  const imageRef=useRef(null)
  useEffect(()=>{
    console.log("Consoling inside use")
    console.log(file)
  },[file])
const ref1=useRef(null)
const ref2=useRef(null)
const ref3=useRef(null)
const ref4=useRef(null)
const ref5=useRef(null)
const ref6=useRef(null)
const ref7=useRef(null)

const handleChange=()=>{
  setFile(imageRef.current.files[0])
}
// const items =props.inputs.map((input)=>(
//   <div className="formInput" key={input.id}>
//   <label htmlFor="">
//     {input.name}
//   </label>
//   <input type={input.type} placeholder={input.placeholder}/>
// </div>
// ))

const handleSubmit=async()=>{
  // console.log(ref1.current.value)
  let d = {"username": ref1.current.value ,"email": ref2.current.value, "expertise": ref3.current.value ,"age": ref4.current.value, "phoneno": ref5.current.value, "password": ref6.current.value , "confirm_password": ref7.current.value }
  let res= await axios.post("http://192.168.51.89:5001/registerprof",d)
  console.log(res)
  ref1.current.value=""
  ref2.current.value=""
  ref3.current.value=""
  ref4.current.value=""
  ref5.current.value=""
  ref6.current.value=""
  ref7.current.value=""

  // console.log(d)
}
// console.log(items)
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="wrapper-new">
        <div className="top-new">
          <h1 className="h1-new">{props.title}</h1>
        </div>
        <div className="bottom-new">
            <div className="left-new">
                <img className="no-image" src={file?URL.createObjectURL(file):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"} alt="no-image-photo" />
                
            </div>
            <p className='picture-title'>{props.pic_title}</p>
            
            <div className="right-new">
                <form>
                <div className="formInput">
                    <label htmlFor="file">
                    Image:<UploadSimple size={25} color="#9e0089" weight="light" className="icon-upload" />
                    </label>
                    <input ref={imageRef} type="file" id="file" onChange={handleChange} />
                  </div>
                  <div className="formInput">
              <label htmlFor="">
               Name
                  </label>
              <input type="text" ref={ref1} placeholder="Name"/>
              </div>
              <div className="formInput" >
                  <label htmlFor="">
                  Username
          </label>
                <input type="text" ref={ref2} placeholder="Username"/>
                </div>
                <div className="formInput" >
                <label htmlFor="">
                  Email
                  </label>
                  <input type="email" ref={ref3} placeholder="Email"/>  
                </div>
                  <div className="formInput" >
                <label htmlFor="">
                  Age
                  </label>
                    <input type="number" ref={ref4} placeholder="Age"/>
                  </div>
                <div className="formInput" >
                  <label htmlFor="">
                    Phone-Number
                  </label>
                  <input type="number" ref={ref5} placeholder="phone-number"/>
                </div>
                <div className="formInput">
                  <label htmlFor="">
                    Password
                  </label>
                  <input type="password" ref={ref6} placeholder="Password"/>
                </div>
                <div className="formInput">
                  <label htmlFor="">
                    Confirm-Password
                  </label>
                  <input type="password" ref={ref7} placeholder="Re-enter Password"/>
                </div>       
                <div className="formInput">
                  <label htmlFor="">
                    Expertise
                  </label>
                  <input type="text" ref={ref7} placeholder="Subject"/>
                </div> 
                <div className="formInput">
                  <label htmlFor="">
                    Qualification
                  </label>
                  <input type="text" ref={ref7} placeholder="Qualification"/>
                </div>            
                <button id="send" onClick={(e)=>{
                                                e.preventDefault()
                                                handleSubmit()}}>Send</button>
                </form>
                
            </div>
        </div>
      </div>
        </div>
        
    </div>
    
  )
}

export default NewTA
