import React, { Component } from "react";
import GioHangRedux from "./GioHangRedux";
import ProductListRedux from "./ProductListRedux";

export default class BaiTapGioHangRedux extends Component {
  render() {
    return (
      <div className="container">
        <h3>Danh sach san pham</h3>
        <button
          type="button"
          class="btn btn-dark"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Gio hang (0)
        </button>
        <ProductListRedux />
        <GioHangRedux />
      </div>
    );
  }
}
