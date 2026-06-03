"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const AddNewCard = () => {
  const router =useRouter()

  return (
    <div className="container home-wraper my-profile">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="browse-wrp">
                <div className="browse-ctg-head my-con-head">
                  <h2 className="sub-cate-page"> <Link href="/" onClick={()=>router.back()}><img src="images/home/left-arrow.svg" alt="" /></Link>Add New Card</h2>
               
                </div>
                <div className="card-wrp-surname">
                  <div className="card-wrp form">
                  
                  <div className="single-card">
                    <img className="card" src="images/inner-page/payment-method-cart.svg" alt="" />
                  </div>
                      <form className="Cardholder">
                              <div className="Cardholder-form">
                                  <label>Cardholder’s Name</label>
                              <input type="text" placeholder="Enter Cardholder’s Name" />

                              <label>Card Number</label>
                              <input type="text" placeholder="Enter Card Number" />

                              <div className="multi-row">
                                  <div className="cvv-exp">
                                      <label>CVV</label>
                                      <input type="text" placeholder="CVV" />
                                  </div>
                                  <div className="cvv-exp">
                                      <label>Expiry Date</label>
                                      <input type="text" placeholder="MM/YYYY" />
                                  </div>
                              </div>

                              <button className="primary-cta add-card">Add Card</button>
                              </div>
                          </form>
                </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
    </div>

  )
}

export default AddNewCard