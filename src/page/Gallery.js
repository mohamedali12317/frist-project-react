import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
// import MainContent from '../comp/mainContent';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
 return (
  <div>
       <>
       <Helmet>
        <title>Gallery page</title>
        <meta name="description" content="Gallery page" />
      </Helmet>
       <Header> </Header>

       <>
  {/* Start Gallery */}
  <div className="gallery" id="gallery">
    <h2 className="main-title">Gallery</h2>
    <div className="container">
      <div className="box">
        <div className="image">
          <img src="imgs/gallery-01.png" alt="" />
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="imgs/gallery-02.png" alt="" />
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="imgs/gallery-03.jpg" alt="" />
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="imgs/gallery-04.png" alt="" />
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="imgs/gallery-05.jpg" alt="" />
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="imgs/gallery-06.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* End Gallery */}
</>


        <Footer text="💕"/>
    </>
  </div>
 );
}

export default Gallery;
