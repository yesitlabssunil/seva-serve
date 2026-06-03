import React from 'react'

const Subscription = () => {
  return (
    <>
       <main>
      <div className="container home-wraper my-profile">
     
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="browse-wrp">
                  <div className="browse-ctg-head my-con-head">
                    <h2 className="sub-cate-page"> <a href="#"><img src="images/home/left-arrow.svg" alt=""/></a>Choose Your Plan</h2>
                    {/* <!-- <div className="see-search">
                       <img src="images/home/search-icon.svg" alt="">
                      <input type="search" placeholder="Search">
                    </div> --> */}
                  </div>
                  
                  <div className="choose-plan-wrp">
                    
                    <div className="yearly-cards">
                        <h3>Monthly</h3>
                        <h4>$9.99</h4>
                        <div>
                            <p><img src="images/inner-page/red-check.svg" alt=""/>Priority Customer Service Access</p>
                        <p><img src="images/inner-page/red-check.svg" alt=""/>20% OFF Discount Offers</p>
                        </div>
                        <button className="primary-cta">Subscribe Now <img src="images/inner-page/right-subcription.svg" alt=""/></button>
                    </div>

                    <div className="yearly-cards active">
                        <span><img src="images/inner-page/check-papular-icon.svg" alt=""/>Most Popular</span>
                        <h3>Quarterly</h3>
                        <h4>$7.99</h4>
                        <div>
                            <p><img src="images/inner-page/red-check.svg" alt=""/>Priority Customer Service Access</p>
                        <p><img src="images/inner-page/red-check.svg" alt=""/>20% OFF Discount Offers</p>
                        </div>
                        <button className="primary-cta">Subscribe Now <img src="images/inner-page/right-subcription.svg" alt=""/></button>
                    </div>

                    <div className="yearly-cards">
                        <h3>Yearly</h3>
                        <h4>$5.99</h4>
                        <div>
                            <p><img src="images/inner-page/red-check.svg" alt=""/>Priority Customer Service Access</p>
                        <p><img src="images/inner-page/red-check.svg" alt=""/>20% OFF Discount Offers</p>
                        </div>
                        <button className="primary-cta">Subscribe Now <img src="images/inner-page/right-subcription.svg" alt=""/></button>
                    </div>


                  </div>

                  <div className="coupon-unlocked-wrp">
                    <div className="left">
                        <div className="coupon-img">
                            <img src="images/inner-page/cupan-icon.svg" alt=""/>
                        </div>
                        <div className="inner-data">
                        <h4>Coupon Unlocked!</h4>
                        <p>Enjoy additional rewards at checkout with your exclusive curator code.</p>
                        </div>
                    </div>

                    <div className="right">
                        <p>SEVA200FF</p>
                        <button className="copy-text-size">
                            <img src="images/inner-page/copy-icon-inner.svg" alt=""/>
                        </button>
                    </div>

                    <div className="right">
                        <p className="copy">SEVA200FF</p>
                        <button className="copy-text-size">
                            <img src="images/inner-page/success-icon.svg" alt=""/>
                        </button>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      
         
      </div>
   
    </main>
    </>
  )
}

export default Subscription
