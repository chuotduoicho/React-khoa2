import React, { Component } from "react";

export default class Cart extends Component {
  renderCart = () => {
    let { gioHang } = this.props;
    return gioHang.map((spGioHang, index) => {
      return (
        <tr key={index}>
          <td scope="row">{spGioHang.maSP}</td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} style={{ width: "40px" }} />
          </td>
          <td>
            <button
              class="btn btn-secondary"
              onClick={() => {
                this.props.tangGiamSoLuong(spGioHang.maSP, 1);
              }}
            >
              +
            </button>
            {spGioHang.soLuong}
            <button
              class="btn btn-secondary"
              onClick={() => {
                this.props.tangGiamSoLuong(spGioHang.maSP, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{(spGioHang.giaBan * spGioHang.soLuong).toLocaleString()}</td>
          <td>
            {" "}
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(spGioHang.maSP);
              }}
            >
              Xoa
            </button>
          </td>
        </tr>
      );
    });
  };
  tinhTongTien = () => {
    let { gioHang } = this.props;
    return gioHang
      .reduce((tongTien, spGioHang, index) => {
        return (tongTien += spGioHang.soLuong * spGioHang.giaBan);
      }, 0)
      .toLocaleString();
  };
  render() {
    return (
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Gio hang cua toi
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>Ma san pham</th>
                    <th>Ten San Pham</th>
                    <th>Hinh anh</th>

                    <th>So luong </th>

                    <th>Gia</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5"></td>
                    <td>Tong tien</td>
                    <td>{this.tinhTongTien()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
