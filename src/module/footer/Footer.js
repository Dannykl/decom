import React from "react";
import "./footer.scss";
import Instagram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/twitter.svg";
import Facebook from "../../assets/images/facebook.svg";

const Footer = () => {
  return (
    <div className="container-fluid footer-container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 social-media-icon">
            <Instagram id="instagram" className="github-logo" />
            <Twitter id="twitter" className="twitter-logo" />
            <Facebook id="facebook" className="facebook-logo" />
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 footer-bottom">
          Copyright ©2020
        </div>
      </div>
    </div>
  );
};
export default Footer;
