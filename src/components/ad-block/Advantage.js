
import './Advantage.css';


const Advantageblock = (props) => {
  const {
    sentenceone,
    senttencetwo,
    sentencethree,
    sentencefour,
    sentencefive,
    sentencesix,
    sentenceseven,
    image1,
    image2
  } = props;



  return (
    <div>
      <section>
        <div className="finace-block warranty-block">
          <div className="inner-block inner-s">
            <div className="row">
              <div className="col-sm-6">
                <div className="h-img">
                  <img src={image1} className="" alt="..." />
                </div>
              </div>
              <div className="col-sm-6 credit ht-sense">
                <div
                  className="row"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div
                    className="col-sm-6 lt-sense first-s"
                  
                  >
                    <h2>{sentenceone}</h2>
                    <h2 className="advance-a">
                      {senttencetwo} <span className="advance-b">.</span>
                    </h2>
                    <p>
                      {sentencethree}{" "}
                      <span className="advance"> {sentencefour}</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="finace-block">
          <div className="inner-block">
            <div className="row">
              <div className="col-sm-6 credit lt-sense">
                <div className="row">
                  <div className="col-sm-6"></div>
                  <div
                    className="col-sm-6 lt-sense"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    
                  >
                    <h2>
                      {sentencefive} {" "}
                      <span className="advance-a">{sentencesix}</span>.
                    </h2>
                    <p>{sentenceseven}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="f-img">
                  <img src={image2} className="" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Advantageblock;
