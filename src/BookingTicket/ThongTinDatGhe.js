import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction, huyGheAction } from "../redux/action/BaiTapDatVeAction";
import { HUY_GHE } from "../redux/type/BaiTapDatVeType";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            GHE da dat
          </span>
          <br />
          <button className="gheDuocChon"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            GHE dang dat
          </span>
          <br />
          <button className="gheDuocChon"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            GHE chua dat
          </span>
          <br />
        </div>
        <div className="mt-5">
          <table class="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "35px" }}>
                <th>So ghe</th>
                <th>Gia</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <th>{gheDangDat.soGhe}</th>
                    <th>{gheDangDat.gia}</th>
                    <th>
                      <button
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Huy
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
