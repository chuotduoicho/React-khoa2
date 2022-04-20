import React, { Component } from "react";
import { connect } from "react-redux";
class GioHangRedux extends Component {
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
                <tbody></tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5"></td>
                    <td>Tong tien</td>
                    <td></td>
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
const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};
export default GioHangRedux;
