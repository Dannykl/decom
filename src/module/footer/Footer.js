import React from "react";
import "./footer.scss";
import Github from "../../assets/images/github.svg";
import Twitter from "../../assets/images/twitter.svg";
import Facebook from "../../assets/images/facebook.svg";

const Footer = () => {
  return (
    <div className="container-fluid footer-container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 footer-top">
          <div className="social-media-icon">
            <Github className="github-logo" width={20} height={20} />
            <Twitter className="twitter-logo" width={20} height={20} />
            <Facebook className="twitter-logo" width={20} height={20} />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 footer-bottom">
          LOGO Copyright ©2020
        </div>
      </div>
    </div>
  );
};
export default Footer;
