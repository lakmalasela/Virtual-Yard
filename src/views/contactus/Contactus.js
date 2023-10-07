import Bottomfoot from "../../components/Bottom/Bottomfoot";
import Navbar from "../../components/navbar/Navbar";
import '../../components/aos/aos-com'
import Info from "../../components/info/Info";
import Chatbutton from "../../components/button/Chatbutton";

const Contactus = () => {
 
  return (
    <div>
      <section>
     <Navbar/>
      </section>

      <Info titleone="SDJ AUTO SALES" titletwo="183 PRINCES HWY DANDENONG Melbourne, VIC 3175."></Info>


      <section>
        <div className="feature apply">
          <div className="row contact-map">
            <div className="col-md-12 finace">

            <iframe   src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12580.552952826325!2d145.2011725!3d-37.9739031!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6155b49f0555d%3A0xa85d6c29d3a4e6ed!2sSDJ%20AUTO%20SALES!5e0!3m2!1sen!2slk!4v1694877011001!5m2!1sen!2slk"} width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      <Chatbutton/>
      
      <section>
        <div className="feature">
        <Bottomfoot/>
        </div>
       
      </section>
    </div>
  );
};
export default Contactus;
