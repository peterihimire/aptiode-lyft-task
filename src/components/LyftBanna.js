import React, { Component } from "react";
import "./LyftBanna.css";
// NOTE react-slick and slick-carousel are needed for the react-slick slider to work
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LyftBannaItem from "./LyftBannaItem";
import lyftbannas from "./lyftbanna-items";
import {

  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

class LyftBanna extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 500,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
      slidesToShow: 5.7,
      slidesToScroll: 1,
    };
    return (
      <div className="lyftbanna">
        <div className="lyftbanna-title-flex">
          <div className="lyftbanna-head">
            <h2 className="lyftbanna-h2">Ride. Bike. Scoot. Go Bananas.</h2>
            <p>
              We’ve got options to get you where you’re going. Choose a ride*
              that suits your mood and budget.
            </p>
          </div>
          <div className="lyft-btn-container">
            <button className=" lyft-chev" onClick={this.previous}>
              <FaArrowLeft className="arrow-icon" />
            </button>
            <button className="lyft-chev-btn" onClick={this.next}>
              <FaArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>

        <div className="lyftbanna-slider-container">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {lyftbannas.map((lyftbanna) => {
              console.log(lyftbanna);
              return (
                <LyftBannaItem key={lyftbanna.id} lyftbannas={lyftbanna} />
              );
            })}
          </Slider>
        </div>
        <div className="lyftbanna-title-flex">
          <div className="lyftbanna-footer">
            <p>
              *Availability of bikes, scooters, rentals, ride types, and transit
              information varies by region.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LyftBanna;
