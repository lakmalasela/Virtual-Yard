
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./Bottomfoot.css";
import Footer from "../footer/Footer";

const Bottomfoot = () => {
  return (
    <div>
      <div className="row mt-4 ink-a">
        <div className="col-md-6 mt-4 link-b">
          <h5 className="social">
            <a href="dss">Click here</a> to subscribe our newsletter.
          </h5>
        </div>
        <div className="col-md-6 mt-4">
          <div className="foot-icon">
            <h3>
              <a href="#" className="social">
                <FaFacebookF />
              </a>
              <a href="#" className="social">
                {" "}
                <AiFillInstagram />
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="line">
        <hr></hr>
      </div>
      <div className="bottom-list">
        <div className="col-md-3 foot-link">
          <h2>Car For Sale</h2>
          <ul className="list-group">
            <li>
              <a href="#">Stock List</a>
            </li>
            <li>
              <a href="#">List My Car</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 foot-link">
          <h2>Services</h2>
          <ul className="list-group">
            <li>
              <a href="#">Finance</a>
            </li>
            <li>
              <a href="#">Warranty</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 foot-link">
          <h2>For Owners</h2>
          <ul className="list-group">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Customer Support</a>
            </li>
            <li>
              <a href="#">Warranty</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 foot-link">
          <h2>About Us</h2>
          <ul className="list-group">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="line">
        <hr></hr>
      </div>
    <Footer/>
    </div>
  );
};

export default Bottomfoot;
