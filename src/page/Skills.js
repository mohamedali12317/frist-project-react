import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
import { Helmet } from 'react-helmet-async';

const Skills = () => {
 return (
  <div>
    <Helmet>
        <title>Skills page</title>
        <meta name="description" content="Skills" />
      </Helmet>

       <Header/>

       <>
  {/* Start Skills */}
  <div className="our-skills" id="our-skills">
    <h2 className="main-title">Our Skills</h2>
    <div className="container">
      <img src="imgs/skills.png" alt="" />
      <div className="skills">
        <div className="skill">
          <h3>
            HTML <span>80%</span>
          </h3>
          <div className="the-progress">
            <span style={{ width:  '80%'}} data-width="80%" />
          </div>
        </div>
        <div className="skill">
          <h3>
            CSS <span>85%</span>
          </h3>
          <div className="the-progress">
            <span style={{ width: '85%' }} data-width="85%" />
          </div>
        </div>
        <div className="skill">
          <h3>
            JavaScript <span>80%</span>
          </h3>
          <div className="the-progress">
            <span style={{ width: '70%' }} data-width="70%" />
          </div>
        </div>
        <div className="skill">
          <h3>
          Bootstrap <span>80%</span>
          </h3>
          <div className="the-progress">
            <span style={{ width: '80%' }} data-width="80%" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Skills */}
</>


       <Footer text="&lt;3"/>
  </div>
 );
}


export default Skills;
