import "./home.css";
import A from "../img/bg.mp4";
import B from "../img/logo.png";
import PureDigitalWhite from "../../puredigital-white.png";
import React from "react";

const Home = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return <div className="h">
        <div className="h-main">
        <div className="logo">
          <img src={PureDigitalWhite} alt="Pure Digital Logo" className="logo-img" />
        </div>
        <nav className="nav-links">
          <button type="button" className="Button" style={{color: '#682aff'}}>Cases</button>
          <button type="button" className="Button" style={{color: '#682aff'}}>Blog</button>
          <button type="button" className="Button" style={{color: '#682aff'}}>People</button>
          <button type="button" className="Button" style={{color: '#682aff'}}>Jobs</button>
          <button type="button" className="Button" style={{color: '#682aff'}}>Contact</button>
        </nav>
        <nav className="langu">
          <button type="button" className="Button" style={{color: '#682aff'}}>DE</button>
          <button type="button" className="Button" style={{color: '#682aff'}}>EN</button>
        </nav>
        <div className="heading">Just Pure... <br />
        Digital Innovation.
        </div>
        <div className="view">
        <button type="button" className="Button-view" style={{color: '#682aff'}}>View Manifesto</button>
        </div>
        <div className="date" style={{color: '#682aff'}}>{date}</div>
        <div className="company" style={{color: '#682aff'}}>
          <img src={B} alt="Pure Digital" className="ck" />
        </div>
        <video loop muted autoPlay className="backdrop">
        <source
          src={A}
          type="video/mp4"
        />
       </video>
         
        </div>
  </div>;
};

export default Home;
