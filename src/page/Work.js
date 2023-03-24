import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
import { Helmet } from 'react-helmet-async';

const Work = () => {
 return (
  <div>
       <Helmet>
        <title>Work page</title>
        <meta name="description" content="Work" />
      </Helmet>

       <Header/>

       <>
  {/* Start Work Steps */}
  <div className="work-steps" id="work-steps">
    <h2 className="main-title">How It Works ?</h2>
    <div className="container">
      <img src="imgs/work-steps.png" alt="" className="image" />
      <div className="info">
        <div className="box">
          <img src="imgs/work-steps-1.png" alt="" />
          <div className="text">
            <h3>Business Analysis</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt obcaecati quisquam quis laborum recusandae debitis vel
            </p>
          </div>
        </div>
        <div className="box">
          <img src="imgs/work-steps-2.png" alt="" />
          <div className="text">
            <h3>Architecture</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt obcaecati quisquam quis laborum recusandae debitis vel
            </p>
          </div>
        </div>
        <div className="box">
          <img src="imgs/work-steps-3.png" alt="" />
          <div className="text">
            <h3>Developement</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt obcaecati quisquam quis laborum recusandae debitis vel
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Work Steps */}
</>


       <Footer text="😎"/>
  </div>
 );
}

export default Work;
