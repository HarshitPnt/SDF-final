import React from 'react'
import mail from './mail.png'
import lock from './images/lock.png'
import google from './images/google.png'
import { Envelope,LockSimple } from 'phosphor-react'
import './styles.css'

function LoginForm() {
  return (
    <>
     <div className='header'>
        <p className='noAccount ib'>Don't have an account?</p>
        <button className='createProfile' type='button'>Create profile</button>
    </div>
    <div className='form-login'>
        <form action="">
            <Envelope color='#7E7C7C' size={32}/>
            <input type="text" name='email' id='email' autoComplete='off' placeholder='UserName'/>
            <br />
            <LockSimple  size={32} color='#7E7C7C'/>
            <input type="text" name='password' id='password' autocomplete='off' placeholder='Password'/>
            <br />
            <button type='submit' className='login'>Login</button>
        </form>
    </div>
    <div className='altSignIn'>
      <div className='forgotPass'>
      <a href="/">Forgot Password?</a>
      </div>
        
        <br />
        <img src={google} alt="google-icon" width='5%' height='5%'/>
    </div>
    </>
   
  )
}

export default LoginForm
