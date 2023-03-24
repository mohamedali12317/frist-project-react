import React from 'react';
import { Link } from "react-router-dom";


const Footer = ({ text }) => {
 return (
<>

    {/* Start Footer */}

    <div className="footer" id="footer" text= "footer">
    <div className="container">
      <div className="box">
        <h3>Mohamed</h3>
        <ul className="social">
          <li>
            <Link to="https://www.facebook.com/Mohamedali12317/" target="_blank" className="facebook">
              <i className="fab fa-facebook-f" />
            </Link>
          </li>
          <li>
            <a href="#" className="twitter">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#" className="youtube">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          nulla rem, dignissimos iste aspernatur
        </p>
      </div>
      <div className="box">
        <ul className="links">
          <li>
            <Link to="https://mohamed-ali-hussain.netlify.app/" target="_blank">Important Link 1</Link>
          </li>
          <li>
            <Link to="https://mohamed-ali-hussain.netlify.app/" target="_blank">Important Link 2</Link>
          </li>
          <li>
            <Link to="https://mohamed-ali-hussain.netlify.app/" target="_blank">Important Link 3</Link>
          </li>
          <li>
            <Link to="https://mohamed-ali-hussain.netlify.app/" target="_blank">Important Link 4</Link>
          </li>
          <li>
            <Link to="https://mohamed-ali-hussain.netlify.app/" target="_blank">Important Link 5</Link>
          </li>
        </ul>
      </div>
      <div className="box">
        <div className="line">
          <i className="fas fa-map-marker-alt fa-fw" />
          <div className="info">
            Romania, Targu Mures, Str. Koos Ferencz, nr. 10, ap. 1
          </div>
        </div>
        <div className="line">
          <i className="far fa-clock fa-fw" />
          <div className="info">Business Hours: From 10:00 To 18:00</div>
        </div>
        <div className="line">
          <i className="fas fa-phone-volume fa-fw" />
          <div className="info">
            <span>+40735109534</span>
            <span>+201553017177</span>
          </div>
        </div>
      </div>
      <div className="box footer-gallery">
        <img src="imgs/gallery-01.png" alt="" />
        <img src="imgs/gallery-02.png" alt="" />
        <img src="imgs/gallery-03.jpg" alt="" />
        <img src="imgs/gallery-04.png" alt="" />
        <img src="imgs/gallery-05.jpg" alt="" />
        <img src="imgs/gallery-06.png" alt="" />
      </div>
    </div>
    <p className="copyright">Made With {text} By Mohamed</p>
    {/* <P text= " &lt;3"/> */}
  </div>

  {/* End Footer */}

  </>
 );
}

export default Footer;
