import virtual from "../../img/virtual-yard.png";
import './footer.css';

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="row">
                <div className="col-md-12">
                    <div className="virtual-yard">
                        <ul className="sd-link">
                            <li>SDJ TECK PTY © 2023</li>
                           
                        </ul>
                        <ul className="terms"> 
                            <li className="term-item list-line">Lic No : 12234</li>
                            <li className="term-item list-line"><a href="#">Privacy Policy</a></li>
                            <li className="term-item term"><a href="#">Term Of Use</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="virtual-logo" style={{textAlign:'center'}}>
                <img src={virtual} className="" alt="..." />
                </div>
            </div>
        </div>
    )

    

}
export default Footer;