import React from 'react'
import "./createBtn.css"
import {Link} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TemplatePage from './templatePage';
const CreateBtn = () => {
    return (
        <>
            <div className='grid-main'>
                <div className='first-grid'>
                    <h2>Create by Templates</h2>
                    <Link to="byTemplate" className="create_link2">Create</Link>
                </div>
                <div className='second-grid'>
                    <h2><span className="create">Create by</span> <span className="drag">Drag & </span><span className="drop"> Drop
                    </span></h2>
                    <Link to="byDND" className="create_link2">Create</Link>
                </div>
            </div>
            {/* <Router>
                <Routes>
                <Route  path="/templatePage" element={<TemplatePage/>}/>
                </Routes>
            </Router> */}
        </>
    )
}

export default CreateBtn
