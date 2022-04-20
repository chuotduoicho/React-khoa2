import React, { Component } from "react";
export default class ProductList extends Component {
  renderProductItem = () => {
    return this.props.arrProduct.map((item, index) => {
      return (
        <div
          className="col-4 mt-3 w3-container w3-center w3-animate-zoom"
          key={index}
        >
          <div className="card">
            <img
              className="card-img-top"
              alt="Card image cap"
              src={item.image}
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.price}$</p>
            </div>
            <button
              className="btn btn-dark text-white"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => {
                this.props.xemChiTiet(item);
              }}
            >
              Add to card <i className="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      );
    });
  };
  render() {
    console.log("data", this.props.arrProduct);
    return <div className="row">{this.renderProductItem()}</div>;
  }
}
