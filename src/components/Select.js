import React, { useState, useRef, useEffect } from 'react'
import "./select.css"
import { Link, BrowserRouter } from 'react-router-dom'
import Navbar from './navbar'
const About = () => {

    const [toggel, settoggel] = useState(true)
    const [done, setdone] = useState("")
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = done;
    }, [done]);

    const doRef = useRef("")
    const clicked = (value) => {

        // setdone(true)
    }
    return (
        <>

        <Navbar/>
            {toggel && (
                <div className="modal">
                    {/* <div className='overlay'></div> */}
                    <div className="modal-content">
                        <div className='main_heading_select_div'>
                            <h1 className='main_heading_select'>Select Template... </h1>
                        </div>
                        <h3 className='second_heading'>Select One*</h3>

                        {/* style={{ backgroundColor: done ? "red" : "white", }} */}
                        <div className="contain">
                            <ul >
                                <li onClick={() => clicked(), (e) => setdone("blog")} className={done == "blog" ? "red" : "white"}  >Blog</li>
                                <li onClick={clicked, (e) => setdone("Gallery")} className={done == "Gallery" ? "red" : "white"} >Gallery</li>
                                <li onClick={clicked, (e) => setdone("Education")} className={done == "Education" ? "red" : "white"} >Education</li>
                                <li onClick={clicked, (e) => setdone("Ecommerce")} className={done == "Ecommerce" ? "red" : "white"}>Ecommerce</li>
                                <li onClick={clicked, (e) => setdone("News")} className={done == "News" ? "red" : "white"}>News</li>
                                <li onClick={clicked, (e) => setdone("Portfolio")} className={done == "Portfolio" ? "red" : "white"} >Portfolio</li>

                            </ul>

                        </div>

                        <Link to="/create/byTemplate/template" target="_blank" className='next' >Next</Link>
                        


                        <div className="prefer_div">
                            <h3 className='heading_prefer'>Select Prefrences*</h3>
                            <input type="radio" className='dark' id="Dark" name="Dark Theme" value="Dark" />
                            <label for="Dark" className='dark'>Dark Theme</label>
                            <br />
                            <input type="radio" id="Light" name="Dark Theme" value="Light" />
                            <label for="Light" className='light'>Light Theme </label>
                        </div>
                        <Link exact to="/" className='back'>Back</Link>
                    </div>

                </div>

            )}

        </>

    );

}


export default About