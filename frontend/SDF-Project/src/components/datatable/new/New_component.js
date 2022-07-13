import React,{useState,useEffect,useRef} from 'react'
import {UploadSimple} from 'phosphor-react'

function New_component(props) {
    const [file,setFile]=useState('')
    const imageRef=useRef(null)
    useEffect(()=>{
      console.log("Consoling inside use")
      console.log(file)
    },[file])
  
  const handleChange=()=>{
    setFile(imageRef.current.files[0])
  }
    return (
        <div className="wrapper-new">
        <div className="top-new">
          <h1 className="h1-new">{props.title}</h1>
        </div>
        <div className="bottom-new">
            <div className="left-new">
                <img className="no-image" src={file?URL.createObjectURL(file):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"} alt="no-image-photo" />
                
            </div>
            <p className='picture-title-new'>{props.pic_title}</p>
            
            <div className="right-new">
                <form>
                <div className="formInput">
                    <label htmlFor="file">
                    Image:<UploadSimple size={25} color="#9e0089" weight="light" className="icon-upload" />
                    </label>
                    <input ref={imageRef} type="file" id="file" onChange={handleChange} />
                  </div>
                  {props.inputs.map((input)=>(
                      <div className="formInput" key={input.id}>
                      <label htmlFor="">
                        {input.name}
                      </label>
                      <input type={input.type} placeholder={input.placeholder}/>
                    </div>
                  ))}
                  
                  <button id="send">Send</button>
                </form>
            </div>
        </div>
      </div>
  )
}

export default New_component
