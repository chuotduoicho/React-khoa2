import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          BAN CHON:{" "}
          <span className="text-success">
            {this.props.taiXiu ? "TAI" : "XIU"}
          </span>
        </div>
        <div className="display-4">
          BAN THANG:{" "}
          <span className="text-primary">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          TONG SO BAN CHOI:{" "}
          <span className="text-danger">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.BaiTapGameXucXacReducer.soBanThang,
    tongSoBanChoi: state.BaiTapGameXucXacReducer.tongSoBanChoi,
    taiXiu: state.BaiTapGameXucXacReducer.taiXiu,
  };
};
export default connect(mapStateToProps)(ThongTinTroChoi);
