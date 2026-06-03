import React from 'react';
import Link from 'next/link';

const PaymentMethod = () => {
  return (
    // <div class="seva-serv-container">
    // <main>
    <div className="container home-wraper my-profile">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="browse-wrp">
                <div className="browse-ctg-head my-con-head">
                  <h2 className="sub-cate-page"> <a href="checkout.html"><img src="images/home/left-arrow.svg" alt="" /></a>Payment Method</h2>
                  <div className="add-card">
                     <Link href="/add-new-card" className="primary-cta"><img src="images/inner-page/add-rounded.svg" alt="" />Add New Card</Link>
                  </div>
                </div>
                <div className="card-wrp-surname">
                  <div className="card-wrp">
                  
                  <div className="single-card">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio1" defaultChecked />
                    </div>
                    <button type="button"><img className="cross-card" src="images/inner-page/card-cross.svg" alt="" /></button>
                    <img className="card" src="images/inner-page/payment-method-cart.svg" alt="" />
                  </div>
                  <div className="single-card">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2" />
                    </div>
                    <button type="button"><img className="cross-card" src="images/inner-page/card-cross.svg" alt="" /></button>
                    <img className="card" src="images/inner-page/payment-method-cart.svg" alt="" />
                  </div>
                  <div className="single-card">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio3" />
                    </div>
                    <button type="button"><img className="cross-card" src="images/inner-page/card-cross.svg" alt="" /></button>
                    <img className="card" src="images/inner-page/payment-method-cart.svg" alt="" />
                  </div>
                  <div className="single-card">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio4" />
                    </div>
                    <button type="button"><img className="cross-card" src="images/inner-page/card-cross.svg" alt="" /></button>
                    <img className="card" src="images/inner-page/payment-method-cart.svg" alt="" />
                  </div>

                  
                </div>
                <div className="card-help">
                    <button type="button" className="secondary-cta">Help & Support</button>
                    <button type="button" className="primary-cta">Pay Now <span>$70</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
    </div>
    // </main>
    // </div>
  )
}

export default PaymentMethod