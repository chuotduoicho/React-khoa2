import React, { Component } from "react";
import "./BaiTapGameXucXac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";
import { connect } from "react-redux";
class BaiTapGameXucXacRedux extends Component {
  render() {
    return (
      <div className="game">
        <div className="title-game text-center mt-5 display-4">
          game xux xac
        </div>

        <div className="row text-center">
          <div className="col-4">
            <button
              className="btnGame"
              onClick={() => {
                this.props.datCuoc(true);
              }}
            >
              Tai
            </button>
          </div>
          <div className="col-4">
            <XucXac />
          </div>
          <div className="col-4">
            <button
              className="btnGame"
              onClick={() => {
                this.props.datCuoc(false);
              }}
            >
              Xiu
            </button>
          </div>
        </div>
        <div className="thongTinTroChoi text-center">
          <ThongTinTroChoi />
          <button
            className="btn btn-success p-4 display-4 mt-5"
            onClick={() => {
              this.props.playGame();
            }}
          >
            Play
          </button>
        </div>
      </div>
    );
  }
}
const mapDispathToProps = (dispath) => {
  return {
    datCuoc: (taiXiu) => {
      //tao action taixiu
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      //gui len reduce
      dispath(action);
    },
    playGame: () => {
      dispath({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(null, mapDispathToProps)(BaiTapGameXucXacRedux);
