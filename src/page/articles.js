import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
import { Helmet } from 'react-helmet-async';

const Articles = () => {
  return (
        <div>
       <>
       <Helmet>
        <title>Articles page</title>
        <meta name="description" content="articles" />
      </Helmet>

       <Header/>

       <>
  {/* Start Articles */}
  <div className="articles" id="articles">
    <h2 className="main-title">Articles</h2>
    <div className="container">
      <div className="box">
        <img src="imgs/cat-01.jpg" alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit
          </p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right" />
        </div>
      </div>
      <div className="box">
        <img src="imgs/cat-02.jpg" alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit
          </p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right" />
        </div>
      </div>
      <div className="box">
        <img src="imgs/cat-03.jpg" alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit
          </p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right" />
        </div>
      </div>
      <div className="box">
        <img src="imgs/cat-04.jpg" alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit
          </p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right" />
        </div>
      </div>
      <div className="box">
        <img src="imgs/cat-05.jpg" alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit
          </p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right" />
        </div>
      </div>
      <div className="box">
        <img src="imgs/cat-06.jpg" alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit
          </p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right" />
        </div>
      </div>
      <div className="box">
        <img src="imgs/cat-07.jpg" alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit
          </p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right" />
        </div>
      </div>
      <div className="box">
        <img src="imgs/cat-08.jpg" alt="" />
        <div className="content">
          <h3>Test Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit
          </p>
        </div>
        <div className="info">
          <a href="">Read More</a>
          <i className="fas fa-long-arrow-alt-right" />
        </div>
      </div>
    </div>
  </div>
  <div className="spikes" />
  {/* End Articles */}
</>


    
      <Footer text="&lt;3"/>

        </>
  </div>
  );
}

export default Articles;
