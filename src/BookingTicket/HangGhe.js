import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/action/BaiTapDatVeAction";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disable = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }

      // xet trang thai ghe dang dat
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );

      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          disabled={disable}
          className={`ghe ${cssGheDaDat}  ${cssGheDangDat}`}
          key={index}
          onClick={() => {
            this.props.datGhe(ghe);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber">{hang.soGhe}</button>;
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="text-light text-left ml-5 mt-5"
        style={{ fontSize: "25px" }}
      >
        {" "}
        {this.renderHangGhe()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

const mapDispathToProps = (dispath) => {
  return {
    datGhe: (ghe) => {
      dispath(datGheAction(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(HangGhe);
