import React from 'react'
import "./createBtn.css"
import {Link} from 'react-router-dom'
import Navbar from './navbar'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TemplatePage from './templatePage';
const CreateBtn = () => {
    return (
        <>
        <Navbar/>
            <div className='grid-main'>
                <div className='first-grid'>
                    <h2>Create by Templates</h2>
                    <Link to="/create/byTemplate"  className="create_link2">Create</Link>
                </div>
                <div className='second-grid'>

                    <h2>Create by <br/>Drag & Drop</h2>
                    <Link to="/create/byDND/empty" target="_blank" className="create_link2">Create</Link>
                </div>
            </div>

        </>
    )
}

export default CreateBtn
