import React, { useState, useRef } from 'react';
import './templatePage.css';
import Navbar from './navbar';
import Catagory from '../Data/catagory';
const TemplatePage = () => {
  const [select, setselect] = useState('');
  const newFun = Catagory.filter((elem) => {
    return elem.name === select;
  });

  return (
    <>
      <Navbar />
      <div className='categoryDiv'>Select Category:</div>
      <input
        placeholder='Select Category'
        value={select}
        className='Selected'
      />

      <div className='Choice'>
        <ul>
          <li onClick={() => setselect('E-Commerce')}>E-Commerce</li>
          <li onClick={() => setselect('Blogs')}>Blogs</li>
          <li onClick={() => setselect('Social')}>Social</li>
          <li onClick={() => setselect('Education')}>Education</li>
        </ul>
      </div>

      <div className='nomi'>
        {newFun.map((elem) => {
          return (
            <div className='grid-data'>
              <img height='200px' width='246px' src={elem.img}></img>
              <h2 className='title-web-store'>{elem.name}</h2>
              <a className='template-page-link' href={elem.link}>
                Show more
              </a>
            </div>
          );
        })}

        {/* <div>first</div>
          <div>second</div>
          <div>third</div> */}
      </div>
    </>
  );
};

export default TemplatePage;
