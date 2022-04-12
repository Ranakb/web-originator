import React from 'react'
import './Support.css'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
const Support = () => {
    return (
        <>
        
<Navbar/>
          <div className='main-support'>
            <div className='first-support'>
              <img src='./Images/support.jpg' className='support-image' />
            </div>
            <div className='second-support'>
              <h1 className='heading-techincal'>Technical Support</h1>
              <p className='para-support'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem laudantium quibusdam culpa suscipit repellat officiis maxime alias ducimus quasi quis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sit eveniet, sint ad commodi totam natus iure minima nostrum minus.</p>
              <Link to="" className='link-support'>Learn more</Link>
            </div>
          </div>  
        </>
    )
}

export default Support
