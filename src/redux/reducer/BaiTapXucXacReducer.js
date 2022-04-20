const stateDefault = {
  taiXiu: true, // true la tai ,false la xiu
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png" },
    { ma: 2, hinhAnh: "./img/gameXucXac/2.png" },
    { ma: 3, hinhAnh: "./img/gameXucXac/3.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      state.taiXiu = action.taiXiu;
      return { ...state };
    case "PLAY_GAME":
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        // mỗi lần lập random ra số ngẫu nhiên từ 1 ->6
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //tạo ra 1 đối tương xúc xắc từ các só ngẫu nhiên
        let xucXacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
        };

        //push vao mang xuc xac ngau nhien
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      state.tongSoBanChoi += 1;
      //xử lí số bàn thắng
      let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      if (
        (tongSoDiem > 11 && state.taiXiu === true) ||
        (tongSoDiem <= 11 && state.taiXiu === false)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export default BaiTapGameXucXacReducer;
