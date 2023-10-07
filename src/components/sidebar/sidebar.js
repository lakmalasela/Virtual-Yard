import Vehiclecard from "../Vehiclecard";
import "./Sidebar.css";

const sidebar = () => {
  return (
    <div className="raido-set">
      <div class="sidenav">
        <div>
        <div className="row">
          <div className="col-md-12">
           
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
               Nissan
              </label>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
        
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Toyota
              </label>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Honda
              </label>
           
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
               BMW
              </label>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
           
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Susuki
              </label>
           
          </div>
        </div>
        </div>
   
      </div>

      <div class="main">
        <section style={{marginTop:'20px;'}}>
        {/* <Vehiclecard/> */}
        </section>
      
        {/* <h2>Sidebar</h2> */}
        {/* <p>This sidebar is of full height (100%) and always shown.</p>
        <p>Scroll down the page to see the result.</p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p> */}
      </div>
    </div>
  );
};
export default sidebar;
