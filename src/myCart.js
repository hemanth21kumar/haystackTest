import React, { useState } from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import itemOne from "./assets/img/item-1.png";
import itemTwo from "./assets/img/item-2.png";
import itemThree from "./assets/img/item-3.png";
import trashIcon from "./assets/img/trash.png";
import infoIcon from "./assets/img/info-circle.png";
import tickIcon from "./assets/img/shield-tick.png";
import tickHoverIcon from "./assets/img/shield-tick-hover.png";
import calendarIcon from "./assets/img/calendar.png";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import "./cart.scss";
const moment = extendMoment(originalMoment);

const MyCart = () => {
  const today = moment();

  const [value, setValue] = useState(moment.range(today.clone().subtract(7, "days"), today.clone()));
  const [isOpen, setisOpen] = useState(false);
  
  const onSelect = (value, states) => {
    setValue(value)
  }
  
  const onToggle = () => {
    setisOpen(!isOpen)
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h3>Cart</h3>
        <div class="row">
          <div class="col-lg-7">
            <div className="cart-item-wrapper">
              <h4>Cart</h4>
              <div className="cart-item">
                <div className="cart-image">
                  <img src={itemOne} />
                </div>
                <div className="cart-detail-col">
                  <div className="cart-detail">
                    <h3>Massey Ferguson 241</h3>
                    <span>$489 • Pickup</span>
                    <p>Rental period: Jan 02 - Jan 05</p>
                  </div>
                  <div className="remove-cart">
                    <img src={trashIcon} />
                  </div>
                </div>
              </div>
              <div className="cart-item">
                <div className="cart-image">
                  <img src={itemTwo} />
                </div>
                <div className="cart-detail-col">
                  <div className="cart-detail">
                    <h3>Massey Ferguson 241</h3>
                    <span>$489 • Pickup</span>
                    <p>Rental period: Jan 02 - Jan 05</p>
                  </div>
                  <div className="remove-cart">
                    <img src={trashIcon} />
                  </div>
                </div>
              </div>
              <div className="cart-item">
                <div className="cart-image">
                  <img src={itemThree} />
                </div>
                <div className="cart-detail-col">
                  <div className="cart-detail">
                    <h3>Massey Ferguson 241</h3>
                    <span>$489 • Pickup</span>
                    <p>Rental period: Jan 02 - Jan 05</p>
                  </div>
                  <div className="remove-cart">
                    <img src={trashIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div className="cart-address">
              <h4>When will you plan to rent ?</h4>
              <div className="date-calendar">
                <div className="date-context">
                  <h5>Date</h5>
                  <span>{value.start.format("MMM-DD")} - {value.end.format("MMM-DD")}</span>
                </div>
                <div className="date-selection">
                  <div onClick={onToggle}><img src={calendarIcon} /></div>
                  {isOpen && <DateRangePicker value={value} onSelect={onSelect} singleDateRange={true} /> }
                </div>
              </div>
              <div className="insurance">
                <h4>Insurance Covered <span>*</span></h4>
                <div className="insurance-wrap">
                  <div className="insurance-wrap-col">
                    <img src={tickIcon} />
                    <h4>Essential</h4>
                    <p>$50.00</p>
                  </div>
                  <div className="insurance-wrap-col">
                    <img src={tickIcon} />
                    <h4>Preferred</h4>
                    <p>$100.00</p>
                  </div>
                  <div className="insurance-wrap-col">
                    <img src={tickIcon} />
                    <h4>Peace</h4>
                    <p>$200.00</p>
                  </div>
                </div>
              </div>
              <div className="address">
                <h4>Select Address</h4>
                <div className="address-selection">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2"></label>
                  </div>
                  <div className="address-content">
                    <p>Raj kumar, +91 972 234 5678 73455 Twentynine Palms Highway, Twentynine Palms CA 92277</p>
                    <button>Change</button>
                  </div>
                </div>
                <div className="address-selection">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2"></label>
                  </div>
                  <div className="address-content">
                    <p>Raj kumar, +91 972 234 5678 73455 Twentynine Palms Highway, Twentynine Palms CA 92277</p>
                    <button>Change</button>
                  </div>
                </div>
                <div className="add">+ Add New Address</div>
              </div>
              <div className="summary">
                <h4>Cart Summary</h4>
                <div className="summary-detail">
                  <div className="summary-detail-info"><label>Sub total</label><span>$1877.00</span></div>
                  <div className="summary-detail-info"><label>Haystacker fee</label><span>$22.00</span></div>
                  <div className="summary-detail-info"><label>Insurance</label><span>$100.00</span></div>
                  <div className="summary-detail-info"><label>Security Deposit</label><span>$12254</span></div>
                  <div className="summary-detail-info"><label>Taxes</label><span>$10</span></div>
                </div>
                <div className="summary-total">
                  <div>Total <img src={infoIcon} /></div>
                  <span>$14263.00</span>
                </div>
                <div className="button-container">
                  <button className="add">Add More Items</button>
                  <button className="book">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="note">
          <p><span>Please note:</span> Remember, while returning your items, additional charges such as loading fees, pickup/delivery fees, may apply. (if it is applicable)</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCart;
