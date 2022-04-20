import React, { Component } from "react";
import Cart from "./Cart";
import SanPham from "./SanPham";
export default class DanhSachSanPham extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    gioHang: [],
  };

  themVaoGio = (sanPham) => {
    console.log(sanPham);
    let spGioHang = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      giaBan: sanPham.giaBan,
      hinhAnh: sanPham.hinhAnh,
      soLuong: 1,
    };
    let index = this.state.gioHang.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );
    if (index != -1) {
      this.state.gioHang[index].soLuong += 1;
    } else {
      this.state.gioHang.push(spGioHang);
    }
    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  xoaGioHang = (maSP) => {
    console.log(maSP);
    let index = this.state.gioHang.findIndex((spGH) => spGH.maSP === maSP);
    if (index !== -1) {
      this.state.gioHang.splice(index, 1);
    }
    this.setState({
      gioHang: this.state.gioHang,
    });
  };
  tinhTongSoLuong = () => {
    // let tongSoLuong = 0;
    // for (let i = 0; i < this.state.gioHang.length; i++) {
    //   let spGioHang = this.state.gioHang[i];
    //   tongSoLuong += spGioHang.soLuong;
    // }
    // return tongSoLuong;
    return this.state.gioHang.reduce((tongSoLuong, spGioHang, index) => {
      return (tongSoLuong += spGioHang.soLuong);
    }, 0);
  };
  tangGiamSoLuong = (maSP, number) => {
    let gioHang = [...this.state.gioHang];
    let index = gioHang.findIndex((spGioHang) => spGioHang.maSP === maSP);
    if (index != -1) {
      if (gioHang[index].soLuong <= 1 && number === -1) {
        alert("So luong it nhat la 1");
      }
      gioHang[index].soLuong += number;
    }
    this.setState({
      gioHang: gioHang,
    });
  };
  renderSanPham = () => {
    return this.mangSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham
            sanPhamProps={sanPham}
            xemChiTiet={this.xemChiTiet}
            themVaoGio={this.themVaoGio}
          />{" "}
        </div>
      );
    });
  };
  xemChiTiet = (sanPhamChon) => {
    this.setState({
      sanPhamChiTiet: sanPhamChon,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <h3 className="display-4 text-center">DANH SACH SAN PHAM</h3>
        <div>
          <button
            type="button"
            class="btn btn-dark"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Gio hang ({this.tinhTongSoLuong()})
          </button>

          <Cart
            gioHang={this.state.gioHang}
            xoaGioHang={this.xoaGioHang}
            tangGiamSoLuong={this.tangGiamSoLuong}
          />
        </div>

        <div className="row">{this.renderSanPham()}</div>
        <div className="row">
          <div className="col-4">
            <h3>{this.state.sanPhamChiTiet.tenSP}</h3>
            <img
              src={this.state.sanPhamChiTiet.hinhAnh}
              alt
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-8">
            <h3>Thong so ki thuat</h3>
            <table class="table">
              <thead class="thead-inverse">
                <tr>
                  <th>Man hinh</th>
                  <th>{this.state.sanPhamChiTiet.manHinh}</th>
                </tr>
                <tr>
                  <th>He dieu hanh</th>
                  <th>{this.state.sanPhamChiTiet.heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera truoc</th>
                  <th>{this.state.sanPhamChiTiet.cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{this.state.sanPhamChiTiet.cameraSau}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{this.state.sanPhamChiTiet.ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{this.state.sanPhamChiTiet.rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
