import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HomeAbout from "../components/HomeAbout";
// import HomeRecent from "../../properties/components/HomeRecent";
// import HomeHow from "../../properties/components/HomeHow";
import HomeTestimonials from "../components/HomeTestimonials";
import HomeLyft from "../components/HomeLyft";
import LyftBanna from "../components/LyftBanna";
import LyftEstimate from "../components/LyftEstimate";
// import HomePopularCities from "../../properties/components/HomePopularCities";

const HomePage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <Banner />
        <div className="main-content">
          <div className="main-content-container">
            <HomeAbout />
          </div>
        </div>
        <HomeTestimonials />
        <div className="main-content-alt">
          <div className="main-content-container">
            <HomeLyft />
          </div>
        </div>
        <div className="main-content-alt-alt">
          <div className="main-content-container-alt-alt">
            <LyftBanna />
          </div>
        </div>
        <div className="main-content-alt-estimate">
          <div className="main-content-container">
            <LyftEstimate />
          </div>
        </div>
        {/* <LyftBanna /> */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
