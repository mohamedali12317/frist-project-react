import React from 'react';
import "./mainContent.css"
import { Link } from "react-router-dom";


const MainContent = ({ text , designer , age }) => {
 return (
        <main>

          {/* Start Landing */}

      <div className="landing">
        <div className="container">
          <div className="text">
            <h1>Welcome, To Elzero World</h1>
            <p>
              Here Iam gonna share everything about my life. Books Iam reading,
              Games Iam Playing, Stories and Events
            </p>
          </div>
          <div className="image">
            <img src="imgs/landing-image.png" alt="" />
          </div>
        </div>
        <Link  to="/articles" className="go-down">
          <i className="fas fa-angle-double-down fa-2x" />
        </Link>
      </div>
      
  {/* End Landing */}

      </main>  
 );
}

export default MainContent;
