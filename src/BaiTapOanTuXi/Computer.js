import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            className="mt-3"
            style={{
              width: "70px",
              height: "70px",
            }}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: "150px", height: "150px" }}
          src="./img/gameOanTuXi/playerComputer.png"
          alt="./img/gameOanTuXi/playerComputer.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuXiReducer.computer,
  };
};
export default connect(mapStateToProps)(Computer);
