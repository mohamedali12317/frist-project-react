import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
import { Helmet } from 'react-helmet-async';

const Services = () => {
 return (
  <div>
    <Helmet>
        <title>Services page</title>
        <meta name="description" content="Services" />
      </Helmet>

       <Header/>

       <>
  {/* Start Services */}
  <div className="services" id="services">
    <h2 className="main-title">Services</h2>
    <div className="container">
      <div className="box">
        <i className="fas fa-user-shield fa-4x" />
        <h3>Security</h3>
        <div className="info">
          <a href="#">Details</a>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-tools fa-4x" />
        <h3>Fixing Issues</h3>
        <div className="info">
          <a href="#">Details</a>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-map-marked-alt fa-4x" />
        <h3>Location</h3>
        <div className="info">
          <a href="#">Details</a>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-laptop-code fa-4x" />
        <h3>Coding</h3>
        <div className="info">
          <a href="#">Details</a>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-palette fa-4x" />
        <h3>Security</h3>
        <div className="info">
          <a href="#">Design</a>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-bullhorn fa-4x" />
        <h3>Marketing</h3>
        <div className="info">
          <a href="#">Details</a>
        </div>
      </div>
    </div>
  </div>
  {/* End Services */}
</>


       <Footer text="💕"/>
  </div>
 );
}

// The End Of The Year Date
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

export default Services;
