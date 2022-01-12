import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <>
         <h1 className="main_heading">Start Creating Website.</h1>
         <Link to="/create" className="create_link">Create</Link>   
        </>
    )
}

export default Home