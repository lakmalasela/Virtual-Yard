import cars from "../img/car_01.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import { useEffect } from "react";
import VehicleList from "./VehicleList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './VehicleList.css'


const Vehiclecard = () => {
  AOS.init({
    duration: 800, // Animation duration
    offset: 200, // Offset (in pixels) from the original trigger point
  });
  useEffect(() => {
    AOS.init();

    return () => {
      AOS.refresh(); // Refresh AOS to clear any previous animations
    };
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="card">
          <div className="card-top">
            <img src={cars} className="card-img-top" alt="..." />
          
          </div>
          <div className="card-bottom">
            <div className="row">
              <div className="col-md-12">
              <a
                  href="/buy/2015-audi-tt-8v-ambition-cabriolet-2dr-s-tronic-6sp-quattro-1-8t-my16/9K_WeTSAXHZEIUz2A0-vug"
                  className="no-style"
                >
                  <h2 className="vy-title-block">
                  2012 Mazd 3 NEO BL4Cy 2.0L
                  </h2>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                  <ul>
                    <li>Cabriolet</li>
                    <li>Automatic</li>
                  </ul>
              </div>
              <div className="col-md-6">
              <ul>
                    <li>73,730 kms</li>
                    <li>Unleaded</li>
                  </ul>

              </div>
            </div>
            <ul className="list-group list-space">
              <li className="list-group-item">
                
              </li>

              <li className="list-group-item pb-4">
                <div className="row">
                  <div className="col vy-price-block">
                    <span className="vy-price">$44,999</span>
                    <small className="vy-price-tax"> Drive Away</small>
                  </div>

                  <div className="col vy-action-block">
                    <a
                      href="/buy/2015-audi-tt-8v-ambition-cabriolet-2dr-s-tronic-6sp-quattro-1-8t-my16/9K_WeTSAXHZEIUz2A0-vug"
                      target="_parent"
                      className="btn btn-black btn-block reserve-button pull-right"
                      style={{ background: "rgba(0,123,255,0)" }}
                    >
                      View
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-top">
            <img src={cars} className="card-img-top" alt="..." />

          </div>
          <div className="card-bottom">
            <div className="row">
              <div className="col-md-12">
              <a
                  href="/buy/2015-audi-tt-8v-ambition-cabriolet-2dr-s-tronic-6sp-quattro-1-8t-my16/9K_WeTSAXHZEIUz2A0-vug"
                  className="no-style"
                >
                  <h2 className="vy-title-block">
                  2012 Mazd 3 NEO BL4Cy 2.0L
                  </h2>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                  <ul>
                    <li>Cabriolet</li>
                    <li>Automatic</li>
                  </ul>
              </div>
              <div className="col-md-6">
              <ul>
                    <li>73,730 kms</li>
                    <li>Unleaded</li>
                  </ul>

              </div>
            </div>
            <ul className="list-group list-space">
              <li className="list-group-item">
                
              </li>

              <li className="list-group-item pb-4">
                <div className="row">
                  <div className="col vy-price-block">
                    <span className="vy-price">$44,999</span>
                    <small className="vy-price-tax"> Drive Away</small>
                  </div>

                  <div className="col vy-action-block">
                    <a
                      href="/buy/2015-audi-tt-8v-ambition-cabriolet-2dr-s-tronic-6sp-quattro-1-8t-my16/9K_WeTSAXHZEIUz2A0-vug"
                      target="_parent"
                      className="btn btn-black btn-block reserve-button pull-right"
                      style={{ background: "rgba(0,123,255,0)" }}
                    >
                      View
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-top">
            <img src={cars} className="card-img-top" alt="..." />
      
          </div>
        <div className="card-bottom">
            <div className="row">
              <div className="col-md-12">
              <a
                  href="/buy/2015-audi-tt-8v-ambition-cabriolet-2dr-s-tronic-6sp-quattro-1-8t-my16/9K_WeTSAXHZEIUz2A0-vug"
                  className="no-style"
                >
                  <h2 className="vy-title-block">
                  2012 Mazd 3 NEO BL4Cy 2.0L
                  </h2>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                  <ul>
                    <li>Cabriolet</li>
                    <li>Automatic</li>
                  </ul>
              </div>
              <div className="col-md-6">
              <ul>
                    <li>73,730 kms</li>
                    <li>Unleaded</li>
                  </ul>

              </div>
            </div>
            <ul className="list-group list-space">
              <li className="list-group-item">
                
              </li>

              <li className="list-group-item pb-4">
                <div className="row">
                  <div className="col vy-price-block">
                    <span className="vy-price">$44,999</span>
                    <small className="vy-price-tax"> Drive Away</small>
                  </div>

                  <div className="col vy-action-block">
                    <a
                      href="/buy/2015-audi-tt-8v-ambition-cabriolet-2dr-s-tronic-6sp-quattro-1-8t-my16/9K_WeTSAXHZEIUz2A0-vug"
                      target="_parent"
                      className="btn btn-black btn-block reserve-button pull-right"
                      style={{ background: "rgba(0,123,255,0)" }}
                    >
                      View
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        
      </Slider>

      {/* <div className="row">
                <div className="col-md-4">

                    <div className="card" data-aos="flip-up" style={{width: '18rem'}}>
                        <img src={cars} className="card-img-top" alt="..."/>
                         <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         </div>
                    </div>
                  
                </div>

                <div className="col-md-4">
                <div className="card"  data-aos="flip-up" style={{width: '18rem'}}>
                        <img src={cars} className="card-img-top" alt="..."/>
                         <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         </div>
                    </div>

                </div>
                <div className="col-md-4">
                <div className="card"  data-aos="flip-up" style={{width: '18rem'}}>
                        <img src={cars} className="card-img-top" alt="..."/>
                         <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         </div>
                    </div>

                </div>



            </div> */}
    </div>
  );
};
export default Vehiclecard;
