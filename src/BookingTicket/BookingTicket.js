import React, { Component } from "react";
import "./BookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((item, index) => {
      return (
        <div key={index} soHangGhe={index}>
          <HangGhe hangGhe={item} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-light display-4">DAT VE Xen hon</div>
                <div
                  className="mt-3 text-light"
                  style={{ fontSize: "25px" }}
                ></div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4 text-center">
                <div style={{ fontSize: "35px" }} className="text-light mt-2">
                  DANH SACH GHE CHON
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
