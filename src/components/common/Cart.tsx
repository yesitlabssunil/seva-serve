import React from 'react'

const Cart = () => {
  return (
    <>
    <div className="icon cart-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightCart"
    aria-controls="offcanvasRight" style={{cursor: "pointer" }}>
    <img src="/images/header/vector-img.svg" alt="Logo" className="logo" />
  </div>

  <div className="offcanvas offcanvas-end cart-unfill" tabIndex="-1" id="offcanvasRightCart"
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

  )
}

export default Cart