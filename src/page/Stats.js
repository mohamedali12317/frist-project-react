import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
import { Helmet } from 'react-helmet-async';



const Stats = () => {
 return (
  <div>
       <Helmet>
        <title>Stats page</title>
        <meta name="description" content="Stats" />
      </Helmet>

       <Header/>

       <>
  {/* Start Stats */}
  <div className="stats" id="stats">
    <h2>Our Awesome Stats</h2>
    <div className="container">
      <div className="box">
        <i className="far fa-user fa-2x fa-fw" />
        <span className="number" data-goal={150}>
        150
        </span>
        <span className="text">Clients</span>
      </div>
      <div className="box">
        <i className="fas fa-code fa-2x fa-fw" />
        <span className="number" data-goal={135}>
          135
        </span>
        <span className="text">Projects</span>
      </div>
      <div className="box">
        <i className="fas fa-globe-asia fa-2x fa-fw" />
        <span className="number" data-goal={50}>
          50
        </span>
        <span className="text">Countries</span>
      </div>
      <div className="box">
        <i className="far fa-money-bill-alt fa-2x fa-fw" />
        <span className="number" data-goal={500}>
          500
        </span>
        <span className="text">Money</span>
      </div>
    </div>
  </div>
  {/* End Stats */}
</>


       <Footer text="❤️"/>
  </div>
 );
}

export default Stats;
