
import Button from "../button/Button";
import Bottomfoot from "./Bottomfoot";

const Bottom = () => {
  return (
    <div className="bottom feature">
      <div className="vertical-line"></div>
      <div className="bottom-button">
        <div className="row">
          <div className="col-md-12">
           <Button buttonname="CHAT WITH US"></Button>
          </div>
        </div>

        <div className="row mt-4 mb-3">
          <div className="col-md-12">
            <Button buttonname="BROWSE OUR STOCK"></Button>
          </div>
        </div>
      </div>
     
     
    
       <Bottomfoot/>
    </div>
  );
};
export default Bottom;
