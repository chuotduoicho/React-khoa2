import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BaiTapGameXucXacReducer from "./BaiTapXucXacReducer";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXi";
import BaiTapDatVeReducer from "./BaiTapDatVeReducer";
const rootReducer = combineReducers({
  // store tong ung dung

  stateGioHang: BaiTapGioHangReducer,
  BaiTapGameXucXacReducer,
  BaiTapOanTuXiReducer,
  BaiTapDatVeReducer,
});
export default rootReducer;
