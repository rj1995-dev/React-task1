import React, { useState } from "react";
import ProductData from "./data/data.json";
import "./index.css";

const Card = () => {
  const [count, setCount] = useState(1);
  const handleChange = event => {
    event.preventDefault();
    // setCount(event.target.value < 1 ? 1 : event.target.value);
    // setCount()
  };
  const ShowProduct = () => {
    return ProductData.map((data, i) => (
      <div className="card product-card" key={i}>
        <div className="card-header">
          <p className="offer-label">
            {data.offer} <i className="fas fa-sun ml-2"></i>
          </p>
        </div>
        <div className="card-body">
          <img
            className="image"
            src={data.productImage}
            alt={data.productImage}
          />
          <div>
            <img src={data.category} alt={data.category} />
          </div>

          <h6 className="text-muted mt-2">{data.quality}</h6>
          <div className="productDescription">
            <span>{data.product}</span>
          </div>
          {/* <br /> */}
          <div className="form-group">
            <select className="form-control list1">
              {data.priceDrop.map((t, index) => (
                <option key={index}>{t}</option>
              ))}
            </select>
            <br />
            <div className="text-muted">
              <h6>
                MRP:
                <span className="pstyle">
                  <del>{data.actualPrice}</del>
                </span>
                <span> {data.currentPrice}</span>
              </h6>
              <i className="fas fa-truck-moving "> </i>
              <span className="ml-2">Standard Delivery: {data.sDelivery}</span>
              <br />
              <i className="fas fa-motorcycle "> </i>
              <span className="ml-2">Express Delivery: {data.eDelivery}</span>
            </div>
            <div className="mt-3">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">Qty</span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  value={count}
                  onChange={handleChange}
                />
                <button className="btn btn-warning ml-2">
                  ADD <i className="fas fa-shopping-basket"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  return <div>{ShowProduct()}</div>;
};

export default Card;
