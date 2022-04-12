import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import data from '../Data/dataHome.json';
import Navbar from './navbar';
import Login from './login';
const Home = () => {
  useEffect(() => {
    <Login />;
  }, []);

  const newData = data.map((data) => {
    return (
      <div className='grid' key={data.id}>
        <div className='grid-col1'>{data.para}</div>
        <div className='grid-col2'>
          <img className='grid-img' src={data.image} />
        </div>
      </div>
    );
  });

  return (
    <>
      <Navbar />
      <div className='home_main'>
        <h1 className='main_heading'>Start Creating Website.</h1>
        <Link to='/login' className='create_link'>
          Create
        </Link>
      </div>

      {/* <img src="/DND images/Capture.PNG" alt="" /> */}

      <div className='home_div1'>
        <h2 className='home_h2'>
          Effortless website building for bussiness people.
        </h2>
      </div>

      {/* Grid Display */}
      <div className='home_grid'>
        <div className='home_grid_column1'>
          <p>
            <b>Built-in tools for marketing</b>
          </p>
          <br />
          <p>
            Attracts customers with <br /> SEO (Search Engine Optimization){' '}
            <br />
            Domian Buying & hosting
          </p>
        </div>
        <div className='home_grid_column2'>
          <p>
            <b>Simple & Easy to use</b>
          </p>
          <br />
          <p>
            Alurring customizable templates <br /> Drag & Drop feature from
            scratch.
          </p>
        </div>
        <div className='home_grid_column3'>
          <p>
            <b>Zero Experience Required</b>
          </p>
          <br />
          <p>
            Warm hearted welcome to coders but no coding is required. Start
            building your website with zero knowledge of coding by DND like
            Features.
          </p>
        </div>
      </div>

      {/* images and secription from JSON file */}

      {newData}

      {/* How to create website */}
      <div className='how_to'>
        <div className='how_to_h2'>
          <h2>Simple way to create your own website</h2>
        </div>

        {/* How to grid */}
        <div className='how_to_grid'>
          <div className='how_to_grid_column1'>
            <div className='how_column1_div1'>
              <p>
                <b>Login</b>
              </p>
              <br />
              <p>
                Login in your account by using your email, name and password. No
                other requirements.
              </p>
            </div>
            <div className='how_column1_div2'>
              <p>
                <b>Add more</b>
              </p>
              <br />
              <p>
                Add videos, images and other links to your website. Customize
                website the way you want.
              </p>
            </div>
          </div>
          <div className='how_to_grid_column2'>
            <div className='how_column2_div1'>
              <p>
                <b>No account then Register</b>
              </p>
              <br />
              <p>
                Create an account by using your email, name and password and
                some other requirements for your own security
              </p>
            </div>
            <div className='how_column2_div2'>
              <p>
                <b>Publish your Website.</b>
              </p>
              <br />
              <p>
                Buy Domain and start hosting your website worldwide. In short
                publish your website.
              </p>
            </div>
          </div>
          <div className='how_to_grid_column3'>
            <div className='how_column3_div1'>
              <p>
                <b>Pick design</b>
              </p>
              <br />
              <p>
                Just pick and existing Template OR either just customize your
                web from scratch through Drag & Drop.
              </p>
            </div>
            <div className='how_column3_div2'>
              <p>
                <b>Ultimate Goal(Bussiness growth)</b>
              </p>
              <br />
              <p>
                After publishing your website just do paid promotions of your
                website for enhancing perception in people mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
