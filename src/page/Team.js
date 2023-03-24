import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
import { Helmet } from 'react-helmet-async';

const Team = () => {
 return (
  <div>
       <Helmet>
        <title>Team page</title>
        <meta name="description" content="Team" />
      </Helmet>

       <Header/>

       <>
  {/* Start Team */}
  <div className="team" id="team">
    <h2 className="main-title">Team Members</h2>
    <div className="container">
      <div className="box">
        <div className="data">
          <img src="imgs/team-01.jpg" alt="" />
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="info">
          <h3>Name</h3>
          <p>Simple Short Description</p>
        </div>
      </div>
      <div className="box">
        <div className="data">
          <img src="imgs/team-02.jpg" alt="" />
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="info">
          <h3>Name</h3>
          <p>Simple Short Description</p>
        </div>
      </div>
      <div className="box">
        <div className="data">
          <img src="imgs/team-03.jpg" alt="" />
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="info">
          <h3>Name</h3>
          <p>Simple Short Description</p>
        </div>
      </div>
      <div className="box">
        <div className="data">
          <img src="imgs/team-04.jpg" alt="" />
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="info">
          <h3>Name</h3>
          <p>Simple Short Description</p>
        </div>
      </div>
      <div className="box">
        <div className="data">
          <img src="imgs/team-05.png" alt="" />
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="info">
          <h3>Name</h3>
          <p>Simple Short Description</p>
        </div>
      </div>
      <div className="box">
        <div className="data">
          <img src="imgs/team-06.png" alt="" />
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="info">
          <h3>Name</h3>
          <p>Simple Short Description</p>
        </div>
      </div>
      <div className="box">
        <div className="data">
          <img src="imgs/team-07.jpg" alt="" />
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="info">
          <h3>Name</h3>
          <p>Simple Short Description</p>
        </div>
      </div>
      <div className="box">
        <div className="data">
          <img src="imgs/team-08.jpg" alt="" />
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="info">
          <h3>Name</h3>
          <p>Simple Short Description</p>
        </div>
      </div>
    </div>
  </div>
  <div className="spikes" />
</>


       <Footer text="😎"/>
  </div>
 );
}

export default Team;
