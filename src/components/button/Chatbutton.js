import Button from "./Button";

const Chatbutton = () => {
  return (
    <div>
      <section>
        <div className="feature">
          <div className="vertical-line"></div>
          <div className="row">
            <div className="col-md-12">
              <div className="finance-c">
                <Button buttonname="CHAT WITH US"></Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="finance-c">
                <Button buttonname="BROWSE OUR STOCK"></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Chatbutton;
