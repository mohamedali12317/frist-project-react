import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
import { Helmet } from 'react-helmet-async';

const Pricing = () => {
 return (
  <div>
    <Helmet>
        <title>Pricing page</title>
        <meta name="description" content="Pricing" />
      </Helmet>

       <Header/>

       <>
  {/* Start Pricing */}
  <div className="pricing" id="pricing">
    <div className="dots dots-up" />
    <div className="dots dots-down" />
    <h2 className="main-title">Pricing Plans</h2>
    <div className="container">
      <div className="box">
        <div className="title">Basic</div>
        <img src="imgs/hosting-basic.png" alt="" />
        <div className="price">
          <span className="amount">$15</span>
          <span className="time">Per Month</span>
        </div>
        <ul>
          <li>10GB HDD Space</li>
          <li>5 Email Addresses</li>
          <li>2 Subdomains</li>
          <li>4 Databases</li>
          <li>Basic Support</li>
        </ul>
        <a href="#">Choose Plan</a>
      </div>
      <div className="box popular">
        <div className="label">Most Popular</div>
        <div className="title">Advanced</div>
        <img src="imgs/hosting-advanced.png" alt="" />
        <div className="price">
          <span className="amount">$25</span>
          <span className="time">Per Month</span>
        </div>
        <ul>
          <li>20GB HDD Space</li>
          <li>10 Email Addresses</li>
          <li>5 Subdomains</li>
          <li>8 Databases</li>
          <li>Advanced Support</li>
        </ul>
        <a href="#">Choose Plan</a>
      </div>
      <div className="box">
        <div className="title">Professional</div>
        <img src="imgs/hosting-professional.png" alt="" />
        <div className="price">
          <span className="amount">$45</span>
          <span className="time">Per Month</span>
        </div>
        <ul>
          <li>50GB HDD Space</li>
          <li>20 Email Addresses</li>
          <li>10 Subdomains</li>
          <li>20 Databases</li>
          <li>Professional Support</li>
        </ul>
        <a href="#">Choose Plan</a>
      </div>
    </div>
  </div>
  {/* End Pricing */}
</>


       <Footer text="💕"/>
  </div>
 );
}

export default Pricing;
