import React,{useState,useRef} from 'react'
import './Login_2.css'
import {User, LockSimple,Eye} from 'phosphor-react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login_2() {
    const navigate=useNavigate()
    // const input=[{name:"User1",pass:"pass1"},{name:"User2",pass:"pass2"},{name:"User3",pass:"pass3"},{name: "Admin1",pass:"123"}]
    const [formData,setFormData]=useState({name:"",pass:""})
    const [error,setError]=useState({color: "red",
    fontSize: "20px",display:"none"
})
const nameRef=useRef("")
const passRef=useRef("")
    const handleOnSubmit=async()=>{
        // let counter=false
        // console.log(formData)
        // for( let i of input){
        //     if(i.name===formData.name){
        //         if(i.pass===formData.pass){
        //             counter=true
        //             navigate("/")
                //}
           //}
            const resp = await axios.post('https://192.168.51.89:5001/login',{
            email: nameRef.current.value,
            password: passRef.current.value,
            role: "admin"
            
        })
        console.log(resp)
        }
        // if(counter===false){
        //     setFormData({name:"",pass:""})
        //     setError({color: "red",
        //         fontSize: "20px",
        //     })
        //     nameRef.current.value=""
        //     passRef.current.value=""    
        // }
        //     else{
        //         setError({color: "red",
        //         fontSize: "20px",display:"none"
        //     });
        //     }
        // }
    const handleUsername =()=>{
        console.log(nameRef.current)
        console.log(nameRef.current.value)
        setFormData({name:nameRef.current.value,pass:formData.pass})
    }
    const handlePassword =()=>{
        console.log(passRef.current)
        console.log(passRef.current.value)
        setFormData({name:formData.name,pass:passRef.current.value})
    }
    const [passType,setPassType]=useState("password")
    const handleEyeClick=()=>{
        if(passType==="password"){
            setPassType("text")
        }
        else{
            setPassType("password")
        }
    }
  return (
    <div className="d-flex flex-column content-login">
      <h1>Sign In</h1>
      <div className="form">
      <div className="username">
        <User className="usericon" size="20"/>
      <input className="form-control my-3 form-border-login size" ref={nameRef}type="email" placeholder="Username" autoComplete='off' onChange={handleUsername}/>
      </div>
      <div className="username">
        <LockSimple className="usericon" size="20"/>
      <input className="form-control my-3 form-border-login size" ref={passRef} type={passType} placeholder="Password" autoComplete='off' onChange={handlePassword}/>
     <button className="eye-icon" onClick={handleEyeClick}><Eye size="20"/></button>
      
      </div>
      
      </div>
      <span className="text-center mb-3 error" style={error}>Invalid Username or Password</span>
      <a className="text-center" href="/">Forgot Password?</a>
      <br />
      <button type="submit" className="btn btn-primary shadow mb-3" onClick={handleOnSubmit}>Log In</button>
      <button type="button" className="btn btn-danger shadow">Sign in With Google</button>
      <p className="text-center my-3">Don't have an account?</p>
      <button type="button" className="btn btn-primary mb-3 shadow">Sign Up</button>

    </div>
  )
}

export default Login_2
