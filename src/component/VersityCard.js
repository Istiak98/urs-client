import React from "react";

const VersityCard = ({ uniVer }) => {
  return (
    <div className="col col-md-3 aligen-items-center">
      <div className="card mt-3" style={{ width: "16rem" }}>
        <img
          src={uniVer.img}
          className="rounded mx-auto d-block mt-5"
          alt="uni-img"
        />
        <div className="card-body">
          <h4 className="card-title text-start">
            Univerity Name:{" "}
            <span className="text-info fs-5">{uniVer.uni_name}</span>
          </h4>
          
          <h6 className="card-text text-start">
            Rating:{" "}
            <span className="text-warning">{uniVer.rating} / 5.00</span>
          </h6>
          <h6 className="card-text text-start">
            Recommend Type:{" "}
            <span className="text-danger">{uniVer.recommend_type}</span>
          </h6>
          <a href="/" className="btn btn-dark">
            Lets learn more
          </a>
        </div>
      </div>
    </div>
  );
};
export default VersityCard;