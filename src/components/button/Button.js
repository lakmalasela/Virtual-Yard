const Button = (props)=>{

  const {buttonname } = props;

 return(
    <div className="view-stock">
    <button className="btn">{buttonname}</button>
  </div>
 )

}
export default Button;