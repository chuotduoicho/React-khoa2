import logo from "./logo.svg";
import "./App.css";

import DanhSachSanPham from "./Props/DanhSachSanPham";
import ListShoe from "./Props/ListShoe";
import BaiTapGioHangRedux from "./BaiTapGioHangRedux/BaiTapGioHangRedux";
import BaiTapGameXucXacRedux from "./XucXacRedux/BaiTapGameXucXacRedux";
import BaiTapOanTuXi from "./BaiTapOanTuXi/BaiTapOanTuXi";
import BookingTicket from "./BookingTicket/BookingTicket";
function App() {
  return (
    <div>
      {/* <DanhSachSanPham /> */}
      {/* <ListShoe /> */}
      {/* <BaiTapGioHangRedux /> */}
      <BaiTapGameXucXacRedux />
      {/* <BaiTapOanTuXi /> */}
      {/* <BookingTicket /> */}
    </div>
  );
}

export default App;
