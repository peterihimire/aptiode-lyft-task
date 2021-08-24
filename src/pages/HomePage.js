import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
// import HomeAbout from "../../properties/components/HomeAbout";
// import HomeRecent from "../../properties/components/HomeRecent";
// import HomeHow from "../../properties/components/HomeHow";
// import HomeTestimonials from "../../properties/components/HomeTestimonials";
// import HomePopularCities from "../../properties/components/HomePopularCities";

const HomePage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <Navbar />
        <Banner />
        <div className="main-content">
          <div className="main-content-container">
            {/* <HomeAbout />
            <HomeRecent />
            <HomeHow />
            <HomeTestimonials />
            <HomePopularCities /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
