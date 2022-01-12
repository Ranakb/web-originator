import React,{useState,useRef} from 'react'
import './templatePage.css'
const TemplatePage = () => {
    const [select, setselect] = useState("")
    
    return (
        <>
           <div className='categoryDiv'>
               Select Category:
           </div>   
          <input  placeholder='Select Category'value={select} className="Selected"/>

            
          <div className='Choice'>
              <ul>
                  <li onClick={()=>setselect("E-Commerce")}>E-Commerce</li>
                  <li onClick={()=>setselect("Blogs")}>Blogs</li>
                  <li onClick={()=>setselect("Social")}>Social</li>
                  <li onClick={()=>setselect("Education")}>Education</li>
              </ul>
          </div>
        </>
    )
}

export default TemplatePage
