import Bottomfoot from "../../components/Bottom/Bottomfoot";
import Navbar from "../../components/navbar/Navbar";
import "./Warranty.css";
import Advantageblock from "../../components/ad-block/Advantage";
import Button from "../../components/button/Button";
import woman from "../../img/w1.png";
import nature from "../../img/w2.jpg";
import Info from "../../components/info/Info";

const Warranty = () => {
  const sentenceone = "Protect your";
  const senttencetwo = " investment";
  const sentencethree =
    "Why not opt for an Extended Motor vehicle Warranty when buying your next car and benifit from these great";
  const sentencefour = "features";
  const sentencefive = "Roadside";
  const sentencesix = "assistance";
  const sentenceseven =
    "Australia-wide-service-24 hours a day/7 days a week we'll be ready to take call and help.";

  return (
    <div>
      <section>
        <Navbar />
      </section>

      <Info
        titleone="Warranty"
        titletwo="Peace of mind for the road ahead."
      ></Info>

      <Advantageblock
        sentenceone={sentenceone}
        senttencetwo={senttencetwo}
        sentencethree={sentencethree}
        sentencefour={sentencefour}
        sentencefive={sentencefive}
        sentencesix={sentencesix}
        sentenceseven={sentenceseven}
        image1={woman}
        image2={nature}
      />

      <section>
        <div className="feature">
          <div className="vertical-line"></div>
          <div className="row">
            <div className="col-md-12">
              <div className="warranty-c">
                <Button buttonname="CHAT WITH US"></Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="warranty-c">
                <Button buttonname="BROWSE OUR STOCK"></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="feature">
          <Bottomfoot />
        </div>
      </section>
    </div>
  );
};

export default Warranty;
