import React, { useState } from "react";
import Form from "../Form/Form";
import "./checkout.css";
import Product from "../../assets/images/product.svg";
import Product1 from "../../assets/images/product-1.svg";
import Product2 from "../../assets/images/product-2.svg";
import Product3 from "../../assets/images/product-3.svg";
import Delete from "../../assets/images/delete-icon.svg";
import { RxCross2 } from "react-icons/rx";

const Checkout: React.FC = () => {
  const [isMessageVisible, setMessageVisible] = useState<boolean>(false);

  const toggleMessageVisibility = () => {
    setMessageVisible(!isMessageVisible);
  };

  return (
    <div className="checkout-main-container">
      <div className="checkout-container">
        <div className="checkout-content">
          <div className="product-container">
            {/* Product Detail */}
            <div className="product-details">
              <img src={Product} alt="Product" width={138} height={138} />
              <div className="product-detail">
                <div className="title">
                  <div>
                    <h3>Tutorial: Creating Realistic Eye in CG 2.0</h3>
                    <span>tom.newbury.cg</span>
                  </div>
                  <h4>US$40</h4>
                </div>
                <div className="product">
                  <h3>
                    Qty: <span>1</span>
                  </h3>
                  <div className="product-handle">
                    <button>Configure</button>
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtotal */}
            <div className="subtotal-container">
              <div className="subtotal">
                <h3>Subtotal</h3>
                <h3>US$40</h3>
              </div>
              <div className="discount-code">
                <input type="text" placeholder="Discount code" />
                <button>Apply</button>
              </div>
            </div>

            {/* Support tom.newbury.cg with a coffee */}
            <div className="product-control">
              <div className="heading-control">
                <h3>Support tom.newbury.cg with a coffee</h3>
                <div className="switch-container">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                  <h3>Make it monthly</h3>
                </div>
              </div>

              <div className="product-h">
                <div className="xyz">
                  <img src={Delete} alt="delete" style={{ border: "none" }} />
                  <RxCross2 />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input type="number" className="item" placeholder="1" />
                    <div className="unselect">3</div>
                    <input type="number" className="item" placeholder="5" />
                  </div>
                  <div className="count-price">
                    <input type="number" placeholder="3" className="input-number"/>
                    <h3>US$3</h3>
                  </div>
                </div>
              </div>

              <div className="leave-message">
                <button onClick={toggleMessageVisibility}>
                  Leave a message
                </button>
                {isMessageVisible && (
                  <div className="leave-msg">
                    <h3>Leave a message</h3>
                    <textarea placeholder="Enter your message"></textarea>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <h3>Make message anonymous</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Total Price */}
            <div className="total-price">
              <h3>Total</h3>
              <h3>US$43</h3>
            </div>
          </div>

          {/* Give as a gift */}
          <div className="give-gift">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <h3>Give as a gift</h3>
          </div>

          {/* Customers who bought this item also bought */}
          <div className="bought-item">
            <h3>Customers who bought this item also bought</h3>
            <div className="products-image">
              <img src={Product1} alt="Product" />
              <img src={Product2} alt="Product" />
              <img src={Product3} alt="Product" />
            </div>
          </div>
        </div>

        {/* Form */}
        <Form />
      </div>
    </div>
  );
};

export default Checkout;
