import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
import { Helmet } from 'react-helmet-async';

const Discount = () => {
 return (
  <div>
    <Helmet>
        <title>Discount page</title>
        <meta name="description" content="Discount" />
      </Helmet>

       <Header/>

       <>
  {/* Start Discount */}
  <div className="discount" id="discount">
    <div className="image">
      <div className="content">
        <h2>We Have A Discount</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          asperiores consectetur, recusandae ratione provident necessitatibus,
          cumque delectus commodi fuga praesentium beatae. Totam vel similique
          laborum dicta aperiam odit doloribus corporis.
        </p>
        <img src="imgs/discount.png" alt="" />
      </div>
    </div>
    <div className="form">
      <div className="content">
        <h2>Request A Discount</h2>
        <form action="">
          <input
            className="input"
            type="text"
            placeholder="Your Name"
            name="name"
          />
          <input
            className="input"
            type="email"
            placeholder="Your Email"
            name="email"
          />
          <input
            className="input"
            type="text"
            placeholder="Your Phone"
            name="mobile"
          />
          <textarea
            className="input"
            placeholder="Tell Us About Your Needs"
            name="message"
            defaultValue={""}
          />
          <input type="submit" defaultValue="Send" />
        </form>
      </div>
    </div>
  </div>
  {/* End Discount */}
</>


       <Footer text="💕"/>
  </div>
 );
}

export default Discount;
