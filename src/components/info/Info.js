const Info = (props)=>{

    const{titleone,titletwo} = props

    return(
        <div>
              <section>
        <div className="feature info-back">
          <div className="row info-a">
            <div
              className="col-md-12 info-b"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="about">{titleone}</h3>
              <h6 className="about">{titletwo}
                
              </h6>
            </div>
          </div>
        </div>
      </section>
        </div>
    )

}
export default Info;
