import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { sanPhamProps } = this.props;
    return (
      <div class="card text-left text-center">
        <div>
          <img
            className="card-img-top"
            src={sanPhamProps.hinhAnh}
            alt
            style={{ width: "70%" }}
          />
          <div className="card-body">
            <h4 className="card-title">{sanPhamProps.tenSP}</h4>
            <p className="card-text">{sanPhamProps.giaBan}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.xemChiTiet(sanPhamProps);
              }}
            >
              Xem chi tiet
            </button>
            <button
              className="btn btn-dark text-white"
              onClick={() => {
                this.props.themVaoGio(sanPhamProps);
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
