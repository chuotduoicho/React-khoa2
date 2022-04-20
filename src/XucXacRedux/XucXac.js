import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return (
        <img
          key={index}
          className="ml-2"
          src={xucXac.hinhAnh}
          alt={xucXac.hinhAnh}
          style={{ width: "55px" }}
        />
      );
    });
  };
  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac,
  };
};
export default connect(mapStateToProps)(XucXac);
