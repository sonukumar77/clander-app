import logo from "../logo.svg";
const SingleCard = (props) => {

    console.log(props);
    const d = props.data ;
  return (
    <>
      <div className="row  g-3">
        <div className="col">
          <div className="card h-100">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h6>${d.price} /month</h6>
              <h5 className="card-title">{d.title}</h5>
              <p className="card-text">
                {d.location.street},{d.location.city},{d.location.state}-{d.location.pincode}
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted d-flex justify-content-between ">
                <span>{d.description.bed} bed</span>
                <span>{d.description.bathroom} bathrooms</span>
                <span>{d.description.length} * {d.description.breadth}m2</span>
              </small>
            </div>
          </div>
        </div>
       
       
      </div>
    </>
  );
};

export default SingleCard;
