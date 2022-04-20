import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          so ban thang :{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4 text-success">
          tong so ban :{" "}
          <span className="text-warning">{this.props.tongBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.BaiTapOanTuXiReducer.ketQua,
    soBanThang: state.BaiTapOanTuXiReducer.soBanThang,
    tongBanChoi: state.BaiTapOanTuXiReducer.tongBanChoi,
  };
};
export default connect(mapStateToProps)(KetQuaTroChoi);
