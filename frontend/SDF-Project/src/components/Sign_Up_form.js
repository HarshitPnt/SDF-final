import React, {useState,useRef} from "react"
import {Eye} from "phosphor-react"
import "./Sign_Up.css"
import axios from "axios"
import {useNavigate} from 'react-router-dom'


function Sign_Up_form() {
//   const input=[{name:"name1",user:"user1",pass:"pass1",email:"email1",phone:"123"},{name:"name2",user:"user2",pass:"pass2",email:"email2",phone:"456"}]
  
  const [passType,setPassType]=useState("password")
  const [formData,setFormData]=useState({name:"",userName:"",email:"",phone:"",pass:"",conf:""})
  const [status,setStatus]=useState({name:"yes",userName:{empty:"yes",taken:"no"},email:"no",phone:"no",pass:"no",conf:"no"})
  const [error,setError]=useState({color: "red",
  fontSize: "18px",display:"none"})
  const nameRef=useRef(null)
  const usernameRef=useRef(null)
  const emailRef=useRef(null)
  const phoneRef=useRef(null)
  const passRef=useRef(null)
  const confPassRef=useRef(null)
  const [errorEmail,setErrorEmail]=useState("noerror")
  const [errorName,setErrorName]=useState("noerror")
  const [errorPass,setErrorPass]=useState("noerror")
  const [errorPhone,setErrorPhone]=useState("noerror")
  const [errorConf,setErrorConf]=useState("noerror")
  const errUsername =useRef(null)
  

  const handleEyeClick=()=>{
    if(passType==="password"){
        setPassType("text")
    }
    else{
        setPassType("password")
    }
}

//   const handleSubmit=async()=>{
//     // if(status.userName.empty==="yes"){
//     //   console.log("Invalid User Name")
//     //   errUsername.current.innerText="Enter a Username"
//     //   await setErrorName("error")
//     // }
//     // else if(status.userName.taken==="yes"){
//     //   errUsername.current.innerText="Username Already Taken"
//     // }
//     // else{
//     //   console.log("Good to go")
//     // }
//   }

//   const handleName =()=>{
//     setFormData(()=>{
//       let temp=formData
//       temp.name=nameRef.current.value
//       return temp
//     })
//     console.log(formData)
// }
// const handleUsername =async ()=>{
//     await setFormData(()=>{
//     let temp=formData
//     temp.userName=usernameRef.current.value
//     return temp
//   })
//   // let counter=true;
//   // for(let x of input){
//   //   if(x.user===formData.userName&&formData.userName!==""){
//   //     await setErrorName("error")
//   //     setError({color: "red",
//   //     fontSize: "18px"})
//   //     counter=false
//   //     await setStatus(()=>{
//   //       let temp=status
//   //       temp.userName.taken="yes"
//   //       temp.userName.empty="no"
//   //       return temp
//   //     })
//   //     console.log(status)
//   //     }
//   //   if(formData.userName===""){
//   //     await setStatus(()=>{
//   //       let temp=status
//   //       temp.userName.empty="yes"
//   //       console.log("printing from inside await and empty set to yes")
//   //       console.log(temp.userName.empty)
//   //       return temp
//   //       })
//   //     console.log("Printing from inside of if")
//   //     console.log(status.userName.empty)
//   //     console.log(status)
//   //   }
//   //   console.log(counter)
    
//   // }
//   // if(counter===true){
//   //   await setError({color: "red",
//   //     fontSize: "18px",display:"none"})
//   //   await setErrorName("noerror")  
//   //   console.log("Setted to noerror")
//   //   if(formData.user!==""){
//   //     await setStatus(()=>{
//   //       let temp=status
//   //       temp.userName.taken="no"
//   //       temp.userName.empty="no"
//   //       return temp
//   //     })
//   //     console.log(status)
//   //   }
//   //   }
//   console.log(formData)
// }
// const handlePassword =async ()=>{
//   await setFormData(()=>{
//     let temp=formData
//     temp.pass=passRef.current.value
//     return temp
//   })
//   if(formData.conf!==formData.pass){
//     await setErrorConf("error")
//   }
//   else{
//     await setErrorConf("noerror")
//   }
//   let Reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,10}$/
//   if(Reg.test(formData.pass)===false){
//     await setErrorPass("error")
//   }
//   else{
//     // await setErrorPass("noerror")
//   }
//   //console.log(formData)
// }

// const handleEmail = async ()=>{
//   console.log(emailRef.current.value)
//   await setFormData(()=>{
//     console.log("Entered setter")
//     let temp=formData
//     temp.email=emailRef.current.value
//     return temp
//   })
//   let counter=true;
//   for(let x of input){
//     if(x.email===formData.email&&formData.email!==""){
//       console.log("Same email " + counter)
//       await setError({color: "red",
//       fontSize: "18px"})
//       console.log(formData)
//       setErrorEmail("error")
//       // console.log(a)
//       console.log(errorEmail)
//       console.log(formData)
//       console.log("Setting error class")
//       counter=false
      
//     }
    
//     console.log(formData)
//   }
//   console.log("Outside")
//   if(counter===true){
//     await setError({color: "red",
//       fontSize: "18px",display:"none"})
//     await setErrorEmail("noerror")  
//     }
    
//   }
//   // console.log(formData)


// const handleConPass =async ()=>{
//   await setFormData(()=>{
//     let temp=formData
//     temp.conf=confPassRef.current.value
//     return temp
//   })
//   if(formData.conf!==formData.pass){
//     await setErrorConf("error")
//   }
//   else{
//     await setErrorConf("noerror")
//   }
//   //console.log(formData)
// }

// const handlePhone =async ()=>{
//   await setFormData(()=>{
//   console.log(formData)
//   let temp=formData
//   temp.phone=phoneRef.current.value
//   return temp
// })
// let counter=true;
// for(let x of input){
//   if(x.phone===formData.phone&&formData.phone!==""){
//     await setErrorPhone("error")
//     setError({color: "red",
//     fontSize: "18px"})
//     counter=false
//     }
//   console.log(counter)
  
// }
// if(counter===true){
//   await setError({color: "red",
//   fontSize: "18px",display:"none"})
//   await setErrorPhone("noerror")  
//   console.log("Setted to noerror")
//   }
// console.log(formData)
// }

const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
const [conf,setConf]=useState('')
const [phone,setPhone]=useState('')
const [email,setEmail]=useState('')
const [name,setName]=useState('')
const [age,setAge]=useState('')
const ageRef=useRef(null)

const handleName=()=>{
  setName(nameRef.current.value)
}

const handleUsername=(e)=>{
  // console.log(usernameRef.current.value)
  setUsername(usernameRef.current.value)
  // console.log(username)
}

const handleAge=()=>{
  setAge(ageRef.current.value)
}

const handlePassword=()=>{
  setPassword(passRef.current.value)
}

const handleConPass=()=>{
  setConf(confPassRef.current.value)
}

const handleEmail=()=>{
  setEmail(emailRef.current.value)
}

const handlePhone=()=>{
  setPhone(phoneRef.current.value)
}

const navigate=useNavigate()
const handleSubmit=async()=>{
  console.log(username)
  console.log(password)
  console.log(email)
  console.log(phone)
  console.log(conf)
  console.log(name)
  const data={
    email: email,
    username: username,
    image:'',
    name:name,
    phoneno: parseInt(phone),
    password: password,
    confirm_password: conf,
    age: parseInt(age)
    }
    // console.log(data)
  const resp=await axios.post('http://192.168.51.89:5001/registerstudent', data)
  // console.log({
  //   email: "iith@iith.ac.in",
  //   name: "faf",
  //   username: "Harshit",
  //   image:'',
  //   phoneno: 122,
  //   password: "12345678",
  //   conirm_password: "12345678",
  //   age: 121
  //   })
  if(resp.data.error=="Password should have atleast 8 characters"){
    setErrorPass("error")
    setErrorConf("noerror")
  }
  else if(resp.data.error=="Passwords are not matching"){
    setErrorPass("noerror")
    setErrorConf("error")
  }
  else {
    navigate(`/student/${resp.data.id}`)
  }
  console.log(resp)


}

  return (
        <div className="d-flex flex-column content-signup">
      <h2>Create an Account</h2>
       <label htmlFor="Full-name">Enter your full name</label>
      <input className="form-control form-border-signup" ref={nameRef} type="text" placeholder="Full Name" aria-label="default input example" autoComplete="off" onChange={handleName}></input> 
      <label htmlFor="Username">Username</label>
      <input className="form-control form-border-signup" ref={usernameRef} type="text" placeholder="Username" aria-label="default input example" autoComplete="off"  onChange={(e)=>{handleUsername()}}></input>
      <p className={"user-taken center-new "+errorName} ref={errUsername}  /*style={error}*/><em>Username Already Taken</em></p>
      <label htmlFor="email">Enter your email</label>
      <input className="form-control form-border-signup" ref={emailRef} type="email" placeholder="User email" aria-label="default input example" autoComplete="off" onChange={handleEmail}></input>
      <p className={"reg-email center-new "+errorEmail} /*style={error}*/><em>Already registered email</em></p>
      <label htmlFor="Full-name">Enter your age</label>
      <input className="form-control form-border-signup" ref={ageRef} type="number" placeholder="Age" aria-label="default input example" autoComplete="off" onChange={handleAge}></input> 
      <label htmlFor="phone-number">Enter your phone-number</label>
      <input className="form-control form-border-signup" ref={phoneRef} type="number" placeholder="Phone number" aria-label="default input example" autoComplete="off" onChange={handlePhone}></input>
      <p className={"reg-mob center-new "+errorPhone} /*style={error}*/><em>Alredy registered mobile number</em> </p>
      <div>
      <div className="pass-container"><button className="eye" onClick={handleEyeClick}>
        <Eye  size="20"/>
        </button>
        <label htmlFor="password">Enter your password</label>
      <input className="form-control form-border-signup" ref={passRef} type={passType} placeholder="Password" aria-label="default input example" autoComplete="off" onChange={handlePassword}></input>
        </div>
      
      <p className={"pass-note "+errorPass} /*style={error}*/><em>Passwords have to be atleast 8 characters long</em></p>
      
      
      <label htmlFor="Confirm-password">Re-enter the password</label>
      <input className="form-control form-borders-signup" ref={confPassRef} type="password" placeholder="Confirm Password" aria-label="default input example" autoComplete="off" onChange={handleConPass}></input>
      <p className={"pass-no center-new "+errorConf}/*style={error}*/><em>Password doesn't match</em> </p>
      </div>
      <div className="btn-div"><button type="submit" className="btn btn-primary btn-margin" onClick={handleSubmit}>Sign Up</button></div>
      
      <hr />
      <p className="login-signup">Already Have an account?<span className="link"><a href="/">Log in</a></span></p>
      </div>
    
  )
}

export default Sign_Up_form
