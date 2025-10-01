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
          <button type="button" className="Button">Cases</button>
          <button type="button" className="Button">Blog</button>
          <button type="button" className="Button">People</button>
          <button type="button" className="Button">Jobs</button>
          <button type="button" className="Button">Contact</button>
        </nav>
        <nav className="langu">
          <button type="button" className="Button">DE</button>
          <button type="button" className="Button">EN</button>
        </nav>
        <div className="heading">We don't do <br />
        advertising.
        </div>
        <div className="view">
        <button type="button" className="Button-view">View Manifesto</button>
        </div>
        <div className="date">{date}</div>
        <div className="company">
          <img src={B} alt="CK" className="ck" />
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
