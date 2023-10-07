import AOS from "aos";
import "aos/dist/aos.css";
import "./Block.css";
import { useEffect, useState } from "react";
import "../aos/aos-com";
import Button from "../button/Button";

const Blockone = () => {

  return (
    <div className="blocks">
      <div className="row">
        <div className="col-md-6">
          <div className="block-service">
            <div className="block-item b_01-img">
              <div className="item-box">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <h2>Apply For Finance</h2>
                  <p>
                    Get Pre-approved and start shopping for your next car today.
                  </p>
                </div>
                <Button buttonname="LEARN MORE"></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="block-service">
            <div className="block-item b_02-img">
              <div className="item-box">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <h2>Sell My Car</h2>
                  <p>
                    Enter in your details and we will get back to you with an
                    offer.
                  </p>
                </div>
                  <Button buttonname="SELL MY CAR"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blockone;
