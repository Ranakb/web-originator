import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import "./signup.css"
const Signup = () => {
    return (
        <>
            <h2 className='wog'>WOG</h2>
            <h6 className='web'>Web Originator</h6>

            <div className='main'>
                <p className='create'>Create a new account</p>
                <h4 className='easy'>its very Easy</h4>
                <hr />
                <div className='all_input'>
                    <div className='name'>
                        <input className='first_name_input' type="text" placeholder='First Name' />
                        <input className='last_name_input' type="text" placeholder='Last Name' />
                    </div>
                    <div className='email_div'>
                        <input type="email" placeholder='example@.com' />
                    </div>
                    <div className='pass_div'>
                        <input className='password_div' type="password" placeholder='Password' />
                        <input className='password_div_con' type="password" placeholder=' Confirm Password' />
                    </div>
                    <div className='dob_div'>
                        <h6>Date Of Birth*</h6>

                        <input type="date"  />
                       
                    </div>
                    <h6 className='gender_heading'>Gender*</h6>
                    <div className='gender_div'>

                        <input type="radio" name="label" value="radio" />
                        <label for="radio" >Male</label>
                        <input type="radio" name="label" value="radio" />
                        <label for="radio">Female</label>
                        <input type="radio" name="label" value="radio" />
                        <label for="radio">Others</label>

                    </div>
                    <p className='policies'>By clicking signup you agree to our terms data policy and cookies policy you may recieve SMS notification from us and can opt out</p>

                    <Link to="/Login" className='submit' type="submit">Submit</Link>

                    <h6 className='Already'>Already have a account?</h6>

                </div>


            </div>
        </>
    )
}

export default Signup
