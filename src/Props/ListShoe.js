import React, { Component } from "react";
import dataJson from "../Data/data.json";
import Modal from "./Modal";
import ProductList from "./ProductList";
export default class ListShoe extends Component {
  state = {
    productDetail: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  xemChiTiet = (newProduct) => {
    this.setState({
      productDetail: newProduct,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div class="row">
          <div class="col-3">
            <div
              class="nav flex-column nav-pills justify-content-center"
              style={{ minHeight: "800" }}
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Home
              </a>
              <a
                class="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Profile
              </a>
            </div>
          </div>
          <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <ProductList
                  arrProduct={dataJson}
                  xemChiTiet={this.xemChiTiet}
                />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                Profile
              </div>
            </div>
          </div>
        </div>
        <Modal content={this.state.productDetail} />
      </div>
    );
  }
}
