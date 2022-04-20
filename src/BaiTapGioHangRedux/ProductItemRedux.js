import React, { Component } from "react";

export default class ProductItemRedux extends Component {
  render() {
    let { product } = this.props;
    return (
      <div class="card text-left text-center">
        <div>
          <img
            className="card-img-top"
            src={product.hinhAnh}
            alt
            style={{ width: "70%" }}
          />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <p className="card-text">{product.giaBan}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.xemChiTiet(product);
              }}
            >
              Xem chi tiet
            </button>
            <button
              className="btn btn-dark text-white"
              onClick={() => {
                this.props.themVaoGio(product);
              }}
            >
              Add to card <i className="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
