import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
import { connect } from "react-redux";
class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi ">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQuaTroChoi />
            <button
              className="btn btn-danger  display-4 mt-5 p-3"
              onClick={() => {
                this.props.playGame();
              }}
            >
              play game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispathToProps = (dispath) => {
  return {
    playGame: () => {
      let count = 20;
      //khai bao ham lap di lap lai
      let randomComputerItem = setInterval(() => {
        dispath({
          type: "RANDOM",
        });
        count++;
        if (count > 40) {
          clearInterval(randomComputerItem);
          dispath({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};
export default connect(null, mapDispathToProps)(BaiTapOanTuXi);
