import React from 'react'
import './Login.css'
import {Google} from './images/google.png'

function Login() {
  return (
    <div className='container top'>
        <div className="container second">
            <h1>Sign In</h1>
        <div className="username-container center">
        <label className="my-2 d-inline-block "htmlFor="Username">Username</label>
         <div classsName="username-field d-inline-block">
         <i class="fa fa-user icon"/>
            <input classsName="form-control username field" type="text" placeholder="Enter Username" aria-label="default input example"></input>
         </div> 
        </div>
        
        <br />
        <div className="password-field center">
        <label className='my-2'htmlFor="Password">Password</label>
        <div classsName="password-field d-inline-block">
        <i class="fa fa-key icon"/>
        <input classsName="form-control password field" type="password" placeholder="Enter Password" aria-label="default input example">
        </input>
        </div> 
        </div>
        
        <br />
        <div className='text-center'>
        <div className="btn-center"><input class="btn btn-primary " type="button" value="Sign Up"></input></div>
   
        <br />
        
        <div className="margin-btn-2">
        <a href="/" className="link">Forgot Password?</a>
            </div>
        </div>
       
        <br />
        <p className='text-center'>Or</p>
        <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-danger text-left" type="button"><span className='icon'></span><span className='text'>Sign With Google</span></button>
  </div>
  <div className="noAccount"><p className='noAccount-text'> Do not have an account?</p>
  <div className="btn-center div-sign"><input class="btn btn-primary btn-sign " type="button" value="Sign Up"></input></div>
  </div></div>
        
        
</div>

  )
}

export default Login
