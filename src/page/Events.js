import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
import { Helmet } from 'react-helmet-async';

const Events = () => {
 return (
  <div>
    <Helmet>
        <title>Events page</title>
        <meta name="description" content="Events" />
      </Helmet>

       <Header/>

       <>
  {/* Start Events */}
  <div className="events" id="events">
    <div className="dots dots-up" />
    <div className="dots dots-down" />
    <h2 className="main-title">Latest Events</h2>
    <div className="container">
      <img src="imgs/events.png" alt="" />
      <div className="info">
        <div className="time">
          <div className="unit">
            <span className="days">15</span>
            <span>Days</span>
          </div>
          <div className="unit">
            <span className="hours">08</span>
            <span>Hours</span>
          </div>
          <div className="unit">
            <span className="minutes">45</span>
            <span>Minutes</span>
          </div>
          <div className="unit">
            <span className="seconds">55</span>
            <span>Seconds</span>
          </div>
        </div>
        <h2 className="title">Tech Masters Event 2021</h2>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
          tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi
          nulla in harum, veritatis porro
        </p>
      </div>
      <div className="subscribe">
        <form action="">
          <input type="email" placeholder="Enter Your Email" />
          <input type="submit" defaultValue="Subscribe" />
        </form>
      </div>
    </div>
  </div>
  {/* End Events */}
</>


       <Footer text="💕"/>
  </div>
 );
}

export default Events;
