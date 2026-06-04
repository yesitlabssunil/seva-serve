// import React from 'react'

// const Cart = () => {
//   return (
//     <>
//     <div className="icon cart-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightCart"
//     aria-controls="offcanvasRight" style={{cursor: "pointer" }}>
//     <img src="/images/header/vector-img.svg" alt="Logo" className="logo" />
//   </div>

//   <div className="offcanvas offcanvas-end cart-unfill" tabIndex="-1" id="offcanvasRightCart"
//     aria-labelledby="offcanvasRightLabel">
//     <div className="offcanvas-header">
//       <button type="button" className="btn-close my-cross" data-bs-dismiss="offcanvas" aria-label="Close">
//         <img src="/images/off-canvas/cross-icon-off-canvas.svg" alt="" />
//       </button>
//       <h5 id="offcanvasRightLabel">Cart</h5>
//     </div>
//     <div className="offcanvas-body empaty-cart">
//       <div className="cart-emp-wrp">
//         <div className="cart-color-img">
//           <img src="/images/modal/cart-color-icon.svg" alt="" />
//         </div>
//         <p className="emt">Empty Cart</p>
//       </div>
//     </div>
//   </div>

//   </>

//   )
// }

// export default Cart



import React, { useState, useEffect } from 'react';
<<<<<<< HEAD

function Cart() {

=======
import {cartItems} from '../../json/cart.json'
import { useRouter } from 'next/navigation';

function Cart() {
     const router = useRouter();
  const [cartData, setCartData] = useState(cartItems);
>>>>>>> recovery-branch
  const [loginStatus, setLoginStatus] = useState<string | null>(null);

  useEffect(() => {

    setLoginStatus(
      localStorage.getItem("isLoggedIn")
    );

  }, []);

  useEffect(() => {

    const handleLoginChange = () => {

      setLoginStatus(
        localStorage.getItem("isLoggedIn")
      );

    };

    window.addEventListener(
      "loginStatusChanged",
      handleLoginChange
    );

    return () => {

      window.removeEventListener(
        "loginStatusChanged",
        handleLoginChange
      );

    };

  }, []);


<<<<<<< HEAD
=======
  const handleRemoveCartItem = (id: number) => {
  setCartData((prev) => prev.filter((item) => item.id !== id));
};


>>>>>>> recovery-branch
  return (
    <>
      {
        loginStatus !== "true" ? (
          <>
            <div className="icon cart-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightCart"
              aria-controls="offcanvasRight" style={{ cursor: "pointer" }}>
              <img src="/images/header/vector-img.svg" alt="Logo" className="logo" />
            </div>

            <div className="offcanvas offcanvas-end cart-unfill" tabIndex={-1} id="offcanvasRightCart"
              aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close my-cross" data-bs-dismiss="offcanvas" aria-label="Close">
                  <img src="/images/off-canvas/cross-icon-off-canvas.svg" alt="" />
                </button>
                <h5 id="offcanvasRightLabel">Cart</h5>
              </div>
              <div className="offcanvas-body empaty-cart">
                <div className="cart-emp-wrp">
                  <div className="cart-color-img">
                    <img src="/images/modal/cart-color-icon.svg" alt="" />
                  </div>
                  <p className="emt">Empty Cart</p>
                </div>
              </div>
            </div>
          </>
        ) : (

          <>
            <div className="icon cart-icon"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRightCartFill"
              aria-controls="offcanvasRight"
              style={{ cursor: "pointer" }}>
              <img src="images/header/vector-img.svg" alt="Logo" className="logo" />
            </div>



            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRightCartFill" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header cart-head">
                <button type="button" className="btn-close my-cross" data-bs-dismiss="offcanvas" aria-label="Close">
                  <img src="images/off-canvas/cross-icon-off-canvas.svg" alt="" />
                </button>
                <h5 id="offcanvasRightLabel">My Service Cart</h5>

              </div>
<<<<<<< HEAD
              <div className="offcanvas-body cart-data">
                <div className="wrp-cart">
                  <div className="plumbing-wrp-cart">
=======
             <div className="offcanvas-body cart-data">
                <div className="wrp-cart">
             {cartData?.map((item) => (
  <div className="plumbing-wrp-cart" key={item.id}>
    <div className="plumbing">
      <p className="plm">
        {item.category}
        <img src="images/home/up-right-arrow.svg" alt="" />
      </p>

      <p className="sub-cate">Sub categories Selected</p>

      <div className="service-list-type">

        {/* Visible Services */}
        <ol className="main-category">
          {item.visibleServices?.map((service, index) => (
            <li
              key={index}
              className={index === 0 ? "bdr" : ""}
            >
              {service.mainCategory}
              <ul>
                <li>
                  {service.subCategory}
                  <ul>
                    <li>{service.service}</li>
                  </ul>
                </li>
              </ul>
            </li>
          ))}
        </ol>

        {/* Additional Services */}
        {item.additionalServices?.length > 0 && (
          <ol className="main-category">
            <li className="more-service">
              + {item.additionalServices.length} more service
              <img
                src="images/header/down-icon.svg"
                alt=""
              />
            </li>

            <div className="service-data">
              {item.additionalServices.map(
                (service, index) => (
                  <li key={index}>
                    {service.mainCategory}
                    <ul>
                      <li>
                        {service.subCategory}
                        <ul>
                          <li>{service.service}</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                )
              )}
            </div>

            <li className="less-service">
              Less service
            </li>
          </ol>
        )}
      </div>
    </div>

    <div className="service-quotes card-quotes">
      <p className="service-cost cart-cost">
        Estimated Cost:
        <span>${item.estimatedCost}</span>
      </p>

      <div className="home-quotes-cta cart-cta">
        <button className="reject-btn" onClick={() => handleRemoveCartItem(item.id)}>
          <img
            src="images/off-canvas/remove-cart.svg"
            alt=""
          />
          Remove
        </button>

        <button className="primary-cta rgt" onClick={() => router.push('/quotes')}>
          Request
        </button>
      </div>
    </div>
  </div>
))}
                  {/* <div className="plumbing-wrp-cart">
>>>>>>> recovery-branch
                    <div className="plumbing">
                      <p className="plm">
                        Plumbing
                        <img src="images/home/up-right-arrow.svg" alt="" />
                      </p>
                      <p className="sub-cate">Sub categories Selected</p>

                      <div className="service-list-type">
                        <ol className="main-category">
                          <li className="bdr">
                            Installation
                            <ul>
                              <li>
                                Sink Installation
                                <ul>
                                  <li>Replace Existing Sink</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            Toilet Blockage
                            <ul>
                              <li>
                                Blockage
                                <ul>
                                  <li>Complete blockage</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ol>
                        <ol className="main-category">
                          <li className="more-service">+ 1 more service <img src="images/header/down-icon.svg" alt="" /></li>

                          <div className="service-data">
                            <li>
                              Installation
                              <ul>
                                <li>
                                  Sink Installation
                                  <ul>
                                    <li>Replace Existing Sink</li>
                                  </ul>
                                </li>
                              </ul>
                            </li>

                          </div>
                          <li className="less-service">Less service</li>
                        </ol>


                      </div>
                    </div>
                    <div className="service-quotes card-quotes">
                      <p className="service-cost cart-cost">Estimated Cost:<span>$299</span></p>
                      <div className="home-quotes-cta cart-cta">
                        <button className="reject-btn"><img src="images/off-canvas/remove-cart.svg" alt="" /> Remove</button>
                        <button className="primary-cta rgt">Request</button>
                      </div>
                    </div>
<<<<<<< HEAD
                  </div>
                  <div className="plumbing-wrp-cart">
                    <div className="plumbing">
                      <p className="plm">
                        Plumbing
                        <img src="images/home/up-right-arrow.svg" alt="" />
                      </p>
                      <p className="sub-cate">Sub categories Selected</p>

                      <div className="service-list-type">
                        <ol className="main-category">
                          <li className="bdr">
                            Installation
                            <ul>
                              <li>
                                Sink Installation
                                <ul>
                                  <li>Replace Existing Sink</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            Toilet Blockage
                            <ul>
                              <li>
                                Blockage
                                <ul>
                                  <li>Complete blockage</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ol>
                        <ol className="main-category">
                          <li className="more-service">+ 1 more service <img src="images/header/down-icon.svg" alt="" /></li>

                          <div className="service-data">
                            <li>
                              Installation
                              <ul>
                                <li>
                                  Sink Installation
                                  <ul>
                                    <li>Replace Existing Sink</li>
                                  </ul>
                                </li>
                              </ul>
                            </li>

                          </div>
                          <li className="less-service">Less service</li>
                        </ol>


                      </div>
                    </div>
                    <div className="service-quotes card-quotes">
                      <p className="service-cost cart-cost">Estimated Cost:<span>$299</span></p>
                      <div className="home-quotes-cta cart-cta">
                        <button className="reject-btn"><img src="images/off-canvas/remove-cart.svg" alt="" /> Remove</button>
                        <button className="primary-cta rgt">Request</button>
                      </div>
                    </div>
                  </div>
=======
                  </div> */}
>>>>>>> recovery-branch
                </div>
              </div>
            </div>

          </>
        )
      }

    </>
  )
}

export default Cart