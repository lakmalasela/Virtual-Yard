
import "./Block.css";
import "../aos/aos-com";
import Button from "../button/Button";

const Blocktwo = () => {



  return (
    <div className="blocks">
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="block-service">
            <div className="block-item b_03-img">
              <div className="item-box">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <h2>Cutomer Support</h2>
                  <p>Out team are available to help you.</p>
                </div>
                <Button buttonname="CONTACT US"></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="block-service">
            <div className="block-item b_04-img">
              <div className="item-box">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <h2>Warranty</h2>
                  <p>Peace of mind for the road ahead.</p>
                </div>

               <Button buttonname="LEARN MORE"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blocktwo;
