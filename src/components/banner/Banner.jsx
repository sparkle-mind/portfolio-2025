import React from "react";
import DownloadBtn from "../common/download-btn/DownloadBtn";
import GradientBtn from "../common/gradient-btn/GradientBtn";

const Banner = () => {
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="banner-inner">
            <div className="row flex align-center justify-between">
              <h1>h1</h1>
              <h2>h2</h2>
              <h3>h3</h3>
              <h4>h4</h4>
              <h5>h5</h5>
              <h6>h6</h6>
              <p>p</p>
              <DownloadBtn />
              <GradientBtn />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
