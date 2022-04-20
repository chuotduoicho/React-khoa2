import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  render() {
    console.log(" ", this.props.mangDatCuoc);
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            style={{
              width: "70px",
              height: "70px",
              transform: "rotate(180deg)",
            }}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: "150px", height: "150px" }}
          src="./img/gameOanTuXi/player.png"
          alt="./img/gameOanTuXi/player.png"
        />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }
            return (
              <div className="col-4">
                <button
                  className="btnItem"
                  style={border}
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                >
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
  };
};
const mapDispathToProps = (dispath) => {
  return {
    datCuoc: (maCuoc) => {
      dispath({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Player);
