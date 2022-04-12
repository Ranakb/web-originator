import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <>
      
        <div className= "loginbody">
           
          
        
        
        <div className='input_labels' >
        <h1 className='h1_login'>LOGIN PAGE</h1> 
        <hr/>
            {/* <label className='label1'>Email</label> */}
            <input className="input1" type ="email" placeholder="Email"/>
            {/* <label className='label2'>Password</label> */}
            <input className="input2" type = "password" placeholder='Password'/>
            <div className='links_login'>
            <Link to="/create" className="loginBtn">Login</Link><br/>
            

        </div>
        <br/>
        <div>
        <Link to="/login/signup" className='new_account'>New?Create Account</Link>
        <a href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><img src="google-icon.png" className='google_image'></img></a>
        <a href="https://www.facebook.com/"><img src="facebook-icon.png" className='fb_image'></img></a>
        </div>
        </div>
      
        </div> 
        </>
    )
}

export default Login
