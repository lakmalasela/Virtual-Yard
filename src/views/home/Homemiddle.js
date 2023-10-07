import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillWalletFill } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import Navbar from "../../components/navbar/Navbar";
// import "../../components/aos/AOS";
import "./Homemiddle.css";

const Homemiddle = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div className="main-div">
      <div className="active">
        <Navbar></Navbar>

        <div className="title-sale" data-aos="fade-up" data-aos-duration="1000">
          <h2>SDJ AUTO SALES</h2>
          <h1>Dont dream it, Drive it!</h1>
        </div>

        <div className="container sell-car">
          <div className="title-box">
            <div className="box">
              <div className="row mt-4">
                <div className="col-sm-3">
                  <span className="icon-logo">
                    <a href="#">
                      <BsFillWalletFill className="icon-logo" />
                      <h6 className="logo-name">Sell My Car</h6>
                    </a>
                  </span>
                </div>
                <div className="col-sm-3">
                  <span className="icon-logo">
                    <a href="#">
                      <BsChatLeft className="icon-logo" />
                      <h6 className="logo-name">Live Chat</h6>
                    </a>
                  </span>
                </div>
                <div className="col-sm-3">
                  <span className="icon-logo">
                    <a href="#">
                      {" "}
                      <BsPersonCircle className="icon-logo" />
                    </a>
                    <h6 className="logo-name">My Account</h6>
                  </span>
                </div>
                <div className="col-sm-3">
                  <span className="icon-logo">
                    <button className="btn btn-transparent text-white">
                      BROWSE OUR STOCK
                    </button>
                  </span>
                </div>
                <div className="icon-list text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homemiddle;
