import Advantageblock from "../../components/ad-block/Advantage";
import Button from "../../components/button/Button";
import Chatbutton from "../../components/button/Chatbutton";
import Smile from "../../img/f1.jpg";
import hand from "../../img/f2.jpg";
import Homemiddle from "../home/Homemiddle";
import './Finance.css';
import Financebottom from "./Financebottom";

const Finance = () => {
  const sentenceone = "Finance";
  const senttencetwo = " available";
  const sentencethree = "No problem! We can still assist you and if finance is";
  const sentencefour = " still an option";
  const sentencefive = " Bad credit";
  const sentencesix = "rating ?";
  const sentenceseven =
    "  No problem! We can still assist you and if finance is still an option.";
   

  return (
    <div>
      <section>
        <Homemiddle></Homemiddle>
      </section>

      <section>
        <div className="feature apply">
          <div className="row finance-a">
            <div className="col-md-12 finace">
              <h3>Apply Online Today</h3>
              <h6>Apply online today just a few minutes</h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 finance-b">
              <div className="finance-c">
                <Button buttonname="Apply Now"></Button>

              </div>
              
            </div>
          </div>
        </div>
      </section>

      <Advantageblock
        sentenceone={sentenceone}
        senttencetwo={senttencetwo}
        sentencethree={sentencethree}
        sentencefour={sentencefour}
        sentencefive={sentencefive}
        sentencesix={sentencesix}
        sentenceseven={sentenceseven}
        image1 = {Smile}
        image2={hand}
      />

      <section>
        <div className="feature">
          <div className="row finance-a">
            <div className="col-md-12 finace">
              <h3>Still Have Questions ?</h3>
              <h6>No problems, just click the button below to speak to us.</h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 finance-b finance-contact">
              <div className="finance-a">
                <Button buttonname="Contact us"></Button>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    <Chatbutton/>
      <section>
        <div className="feature">
          <div className="row finance-a faq">
            <div className="col-md-12 finace">
              <h3>FAQ</h3>
              <h6>Apply online today just a few minutes</h6>
              <h6>Let's see if we can anser them for you.</h6>
            </div>
          </div>
        </div>
      </section>

    <Financebottom/>

      <section>
        <div className="feature">
          <div className="row finance-a">
            <div className="col-md-12 finace">
              <h3>STILL HAVE QUESTIONS ?</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Finance;
