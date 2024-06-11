import React from "react";
// import "../styles.css";
import logo from "../assets/consilo..png";

const FooterHeading = ({ title, children }) => (
  <div className="footer-cell">
    <div className="footer-heading">{title}</div>
    {children}
  </div>
);

const FooterLink = ({ href, children }) => (
  <>
    <a className="footer-link" href={href}>
      {children}
    </a>
    <br />
  </>
);

const SocialIcon = ({ width, height, viewBox, d, style }) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <path d={d} fill="white" />
  </svg>
);

const Footer = () => (
  <div className="footer">
    <div className="hrule">
      <div className="footer-left">
        <img src={logo} alt="logo here" className="logo2" />
      </div>
      <div className="footer-content">
        <div className="footer-table">
          <div className="footer-row">
            <FooterHeading title="Contact Us">
              <FooterLink href="#">Newest Releases</FooterLink>
              <FooterLink href="#">Discount</FooterLink>
              <FooterLink href="#">Popular Demand</FooterLink>
            </FooterHeading>
            <FooterHeading title="About Us">
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Resource Hub</FooterLink>
              <FooterLink href="#">Login</FooterLink>
            </FooterHeading>
            <FooterHeading title="Contact Us">
              <FooterLink href="#">Get in touch</FooterLink>
              <SocialIcon
                width="12"
                height="20"
                viewBox="0 0 10 18"
                d="M10.4286 10.6875L10.9563 7.24895H7.65695V5.01756C7.65695 4.07684 8.11785 3.15986 9.59554 3.15986H11.0955V0.232305C11.0955 0.232305 9.73433 0 8.43291 0C5.71576 0 3.9397 1.64691 3.9397 4.62828V7.24895H0.919373V10.6875H3.9397V19H7.65695V10.6875H10.4286Z"
              />
              <SocialIcon
                width="22"
                height="20"
                viewBox="0 0 21 21"
                d="M10.9711 14.7223C13.303 14.7223 15.1933 12.8319 15.1933 10.5001C15.1933 8.16818 13.303 6.27783 10.9711 6.27783C8.63925 6.27783 6.7489 8.16818 6.7489 10.5001C6.7489 12.8319 8.63925 14.7223 10.9711 14.7223Z M1.47113 14.7222V6.27778C1.47113 3.36295 3.83408 1 6.74891 1H15.1934C18.1082 1 20.4711 3.36295 20.4711 6.27778V14.7222C20.4711 17.637 18.1082 20 15.1934 20H6.74891C3.83408 20 1.47113 17.637 1.47113 14.7222Z M16.7767 4.70496L16.7872 4.69324"
                style={{ paddingLeft: "10px" }}
              />
              <SocialIcon
                width="22"
                height="20"
                viewBox="0 0 21 21"
                d="M1.47113 14.7222V6.27778C1.47113 3.36295 3.83408 1 6.74891 1H15.1934C18.1082 1 20.4711 3.36295 20.4711 6.27778V14.7222C20.4711 17.637 18.1082 20 15.1934 20H6.74891C3.83408 20 1.47113 17.637 1.47113 14.7222Z"
                style={{ paddingLeft: "10px" }}
                stroke="white"
              />
            </FooterHeading>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
