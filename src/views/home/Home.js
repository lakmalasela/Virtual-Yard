
import Vehiclecard from "../../components/Vehiclecard";
import Bottom from "../../components/Bottom/Bottom";
import Button from "../../components/button/Button";
import Homemiddle from "./Homemiddle";
import Blockone from "../../components/block/Block-one";
import Blocktwo from "../../components/block/Block-two";




const Home = () => {
  return (
    <div>
      <section className="feature-vehicle">
  
     <Homemiddle></Homemiddle>
     
      </section>

      <section>
        <div className="feature">
          <div className="row">
            <div className="col-md-12">
              <h1>Featured Vehicle</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Vehiclecard />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="feature">
          <div className="row">
            <div className="col-md-12">
              <h1>View All Our Vehicle</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="view-stock">
                <button className="btn">View All Stock</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Blockone></Blockone>
      </section>
      <div className="feature">
          <div className="row sentence">
            <div className="col-md-6 sentence-block">
            <h3>Can't Find What Your're looking for?</h3>
            </div>
            <div className="col-md-6">
           <Button buttonname="FIND MY CAR"></Button>
            </div>
            
          </div>
    
        </div>
      <section>
       <Blocktwo></Blocktwo>
        
      </section>
      <section>
        <Bottom/>
      </section>
    </div>
  );
};

export default Home;
