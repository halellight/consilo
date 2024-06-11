import React from "react";
import group from "../assets/Group 60 (1).png";
import pic1 from "../assets/IMG-20231011-WA0114.jpg";
const FeaturedWork = () => {
  return (
    <div className="featured">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="feat1">Featured Work</div>
      <img className="fea" src={group} alt="icon" />
      <div className="feat2">Featured Work</div>

      <div class="detailsss">
        <div class="one-dets">
          <img
            src={pic1}
            alt="suii"
            style={{
              width: 1233,
              height: 543,
              // left: 104,
              // top: 2494,

              borderRadius: 20,
              position: "relative",
            }}
          />
          <div class="app-name">Bumbly</div>
          <div class="type">Mobile App design</div>
        </div>
      </div>
      <div class="detailsss2">
        <div class="one-dets">
          <img
            src={pic1}
            alt="suii"
            style={{
              width: 1233,
              height: 543,
              // left: 104,
              // top: 2494,

              borderRadius: 20,
              position: "relative",
            }}
          />
          <div class="app-name">Bumbly</div>
          <div class="type">Mobile App design</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
