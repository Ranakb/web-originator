import React from 'react'
import {AiOutlineCamera} from 'react-icons/ai'
import './dashboard.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './navbar'
const DashBoard = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }

  }
  return (
    <>
    <Navbar/>
      <div className='main_dashboard'>
        <div className="dsb_image">
       
          <img src= {image || "/Avatar.png"} alt="preview image" className='DsBimg' ></img>
        </div>

        <div >
       <input id='f02' type="file" onChange={onImageChange} className="selector"  />
       <label for="f02"><AiOutlineCamera size="2em"/></label>
         
        </div>
       
        {/* <div className="profile_img">
    
      </div> */}


        <div className="options">
          <ul>
            <li> <Link to="" className='dashboard_link2'>Profile</Link></li>
            <li> <Link to="" className='dashboard_link1'>Website</Link></li>
            <li> <Link to="" className='dashboard_link1'>Domains</Link></li>
            <li> <Link to="" className='dashboard_link'>Setting</Link></li>
            <li> <Link to="" className='dashboard_link'>Hosting</Link></li>
            <li> <Link to="" className='dashboard_link'>Logout</Link></li>


          </ul>
        </div>
      </div>
    </>
  )
}

export default DashBoard