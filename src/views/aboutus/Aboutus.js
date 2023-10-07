import Navbar from "../../components/navbar/Navbar";
import car from "../../img/a1.jpg";
import "../../components/block/Block.css";
import Bottomfoot from "../../components/Bottom/Bottomfoot";
import "./Aboutus.css";
import Chatbutton from "../../components/button/Chatbutton";
import Info from "../../components/info/Info";

const Aboutus = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Info
        titleone="About Us"
        titletwo="Exceeding the expectations of our clients."
      ></Info>

      <section>
        <div className="about-block">
          <div className="inner-block">
            <div className="row">
              <div className="col-sm-6">
                <div className="h-img">
                  <img src={car} className="" alt="..." />
                </div>
              </div>
              <div className="col-sm-6 credit ht-sense">
                <div className="row">
                  <div
                    className="col-sm-6 lt-sense ht-sense"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h2>
                      SDJ AUTO <span className="about-c">SALES</span>.
                    </h2>
                    <h2 className="about-c">
                      available <span className="about-d">.</span>
                    </h2>
                    <p>
                      Here at SDJ AUTO SALES we don't just sell any old used
                      cars,we offer the best possible selection of used cars in
                      NSW.
                    </p>
                    <p>
                      We jhave vehicles suitable for all types of buyers and
                      cars to suit all budgets and lifestyles so we sure to have
                      the right car for you.
                    </p>

                    <p>
                      We invite you to come and experience our excellent
                      customer service and to take a look around our stock and
                      find your next car with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Chatbutton />

      <section>
        <div className="feature">
          <Bottomfoot />
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Aboutus;
