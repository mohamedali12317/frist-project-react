import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
// import MainContent from '../comp/mainContent';
import { Helmet } from 'react-helmet-async';

const Features = () => {
 return (
  <div>
       <>
       <Helmet>
        <title>javascript page</title>
        <meta name="description" content="javascript" />
      </Helmet>

       <Header> </Header>      

       <>
  {/* Start Features */}
  <div className="features" id="features">
    <h2 className="main-title">Features</h2>
    <div className="container">
      <div className="box quality">
        <div className="img-holder">
          <img src="imgs/features-01.jpg" alt="" />
        </div>
        <h2>Quality</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum
          hic veniam eligendi minima
        </p>
        <a href="#">More</a>
      </div>
      <div className="box time">
        <div className="img-holder">
          <img src="imgs/features-02.jpg" alt="" />
        </div>
        <h2>Time</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum
          hic veniam eligendi minima
        </p>
        <a href="#">More</a>
      </div>
      <div className="box passion">
        <div className="img-holder">
          <img src="imgs/features-03.jpg" alt="" />
        </div>
        <h2>Passion</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum
          hic veniam eligendi minima
        </p>
        <a href="#">More</a>
      </div>
    </div>
  </div>
  {/* End Features */}
</>

    
    <Footer text= "❤️"></Footer>
    
        </>
  </div>
 );
}

export default Features;
