import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
import { Helmet } from 'react-helmet-async';

function Testimonials(props) {
 return (
  <div>
    <Header/>
       <Helmet>
        <title>Testimonials page</title>
        <meta name="description" content="Testimonials page" />
      </Helmet>

  
      <>
  {/* Start Testimonials */}
  <div className="testimonials" id="testimonials">
    <h2 className="main-title">Testimonials</h2>
    <div className="container">
      <div className="box">
        <img src="imgs/avatar-01.png" alt="" />
        <h3>Mohamed Farag</h3>
        <span className="title">Full Stack Developer</span>
        <div className="rate">
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="far fa-star" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
          reiciendis voluptatum, amet est natus quaerat ducimus
        </p>
      </div>
      <div className="box">
        <img src="imgs/avatar-02.png" alt="" />
        <h3>Mohamed Ibrahim</h3>
        <span className="title">Full Stack Developer</span>
        <div className="rate">
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="far fa-star" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
          reiciendis voluptatum, amet est natus quaerat ducimus
        </p>
      </div>
      <div className="box">
        <img src="imgs/avatar-03.png" alt="" />
        <h3>Shady Nabil</h3>
        <span className="title">Full Stack Developer</span>
        <div className="rate">
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="far fa-star" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
          reiciendis voluptatum, amet est natus quaerat ducimus
        </p>
      </div>
      <div className="box">
        <img src="imgs/avatar-04.png" alt="" />
        <h3>Amr Hendawy</h3>
        <span className="title">Full Stack Developer</span>
        <div className="rate">
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
          reiciendis voluptatum, amet est natus quaerat ducimus
        </p>
      </div>
      <div className="box">
        <img src="imgs/avatar-05.png" alt="" />
        <h3>Sherief Ashraf</h3>
        <span className="title">Full Stack Developer</span>
        <div className="rate">
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
          reiciendis voluptatum, amet est natus quaerat ducimus
        </p>
      </div>
      <div className="box">
        <img src="imgs/avatar-06.png" alt="" />
        <h3>Osama Mohamed</h3>
        <span className="title">Full Stack Developer</span>
        <div className="rate">
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="filled fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
          reiciendis voluptatum, amet est natus quaerat ducimus
        </p>
      </div>
    </div>
  </div>
  {/* End Testimonials */}
</>

   

    <Footer text="❤️"/>
  </div>
 );
}

export default Testimonials;