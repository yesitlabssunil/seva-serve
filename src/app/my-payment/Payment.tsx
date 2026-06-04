"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Payment = () => {

    const router = useRouter()
  return (
    <div>
      <main>
      <div className="container home-wraper my-profile">
      
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="browse-wrp">
                  <div className="browse-ctg-head my-con-head">
                    <h2 className="sub-cate-page"> <a href="#"><img src="images/home/left-arrow.svg" alt=""/></a>My Payments </h2>
                    <div className="tab-left">
  <ul className="nav nav-pills mb-3" id="customTabs-tab" role="tablist">
    
    <li className="nav-item" role="presentation">
      <button className="nav-link active"
        id="customTabs-all-tab"
        data-bs-toggle="pill"
        data-bs-target="#customTabs-home"
        type="button"
        role="tab"
        aria-controls="customTabs-home"
        aria-selected="true">
        All
      </button>
    </li>

    <li className="nav-item" role="presentation">
      <button className="nav-link"
        id="customTabs-paid-tab"
        data-bs-toggle="pill"
        data-bs-target="#customTabs-profile"
        type="button"
        role="tab"
        aria-controls="customTabs-profile"
        aria-selected="false">
        Paid
      </button>
    </li>

    <li className="nav-item" role="presentation">
      <button className="nav-link"
        id="customTabs-pending-tab"
        data-bs-toggle="pill"
        data-bs-target="#customTabs-contact"
        type="button"
        role="tab"
        aria-controls="customTabs-contact"
        aria-selected="false">
        Pending
      </button>
    </li>

  </ul>
</div>
                  </div>
                  
                    <div className="tab-content" id="customTabs-tabContent">

                        <div className="tab-pane fade show active"
                            id="customTabs-home"
                            role="tabpanel"
                            aria-labelledby="customTabs-all-tab">
                            
                            <div className="my-payments-body-wrp">
                                <div className="my-payments-body">
                                <div className="left-payments-body">
                                    <div className="plumbing-icon">
                                    <img src="images/inner-page/plum-img.svg" alt=""/>
                                </div>
                                <div className="paid">
                                    <h5>Plumbing - Shower Repair <span><img src="images/inner-page/paidcircle-tick.svg" alt=""/> Paid</span></h5>
                                    <p>Nov 19, 2026 • 10:30 AM</p>
                                    <p className="amount">Amount : <span>$149</span> </p>
                                </div>
                                </div>
                                <div className="right-payments-body">
<<<<<<< HEAD
                                    <button className="secondary-cta">View Job</button>
=======
                                   <button className="secondary-cta"onClick={()=>router.push("/checkout")} >View Job</button>
>>>>>>> recovery-branch
                                </div>
                            </div>
                            <div className="my-payments-body">
                                <div className="left-payments-body">
                                    <div className="plumbing-icon">
                                    <img src="images/inner-page/plum-img.svg" alt=""/>
                                </div>
                                <div className="paid pending">
                                    <h5>Plumbing - Shower Repair <span><img src="images/inner-page/pending-clock-icon.svg" alt=""/> Pending</span></h5>
                                    <p>Nov 19, 2026 • 10:30 AM</p>
                                    <p className="amount">Amount : <span>$149</span> </p>
                                </div>
                                </div>
                                <div className="right-payments-body">
<<<<<<< HEAD
                                    <button className="secondary-cta">View Job</button>
=======
                                   <button className="secondary-cta"onClick={()=>router.push("/checkout")} >View Job</button>
>>>>>>> recovery-branch
                                    <button className="primary-cta"  onClick={()=>router.push("/checkout")}><img className="pay" src="images/modal/notice-right-arrow.svg" alt=""/> Pay Now</button>
                                </div>
                            </div>
                            <div className="my-payments-body">
                                <div className="left-payments-body">
                                    <div className="plumbing-icon">
                                    <img src="images/inner-page/plum-img.svg" alt=""/>
                                </div>
                                <div className="paid">
                                    <h5>Plumbing - Shower Repair <span><img src="images/inner-page/paidcircle-tick.svg" alt=""/> Paid</span></h5>
                                    <p>Nov 19, 2026 • 10:30 AM</p>
                                    <p className="amount">Amount : <span>$149</span> </p>
                                </div>
                                </div>
                                <div className="right-payments-body">
<<<<<<< HEAD
                                    <button className="secondary-cta">View Job</button>
=======
                                   <button className="secondary-cta"onClick={()=>router.push("/checkout")} >View Job</button>
>>>>>>> recovery-branch
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="tab-pane fade"
                            id="customTabs-profile"
                            role="tabpanel"
                            aria-labelledby="customTabs-paid-tab">
                            <div className="my-payments-body-wrp">
                                <div className="my-payments-body">
                                <div className="left-payments-body">
                                    <div className="plumbing-icon">
                                    <img src="images/inner-page/plum-img.svg" alt=""/>
                                </div>
                                <div className="paid">
                                    <h5>Plumbing - Shower Repair <span><img src="images/inner-page/paidcircle-tick.svg" alt=""/> Paid</span></h5>
                                    <p>Nov 19, 2026 • 10:30 AM</p>
                                    <p className="amount">Amount : <span>$149</span> </p>
                                </div>
                                </div>
                                <div className="right-payments-body">
<<<<<<< HEAD
                                    <button className="secondary-cta">View Job</button>
=======
                                   <button className="secondary-cta"onClick={()=>router.push("/checkout")} >View Job</button>
>>>>>>> recovery-branch
                                </div>
                            </div>
                            <div className="my-payments-body">
                                <div className="left-payments-body">
                                    <div className="plumbing-icon">
                                    <img src="images/inner-page/plum-img.svg" alt=""/>
                                </div>
                                <div className="paid">
                                    <h5>Plumbing - Shower Repair <span><img src="images/inner-page/paidcircle-tick.svg" alt=""/> Paid</span></h5>
                                    <p>Nov 19, 2026 • 10:30 AM</p>
                                    <p className="amount">Amount : <span>$149</span> </p>
                                </div>
                                </div>
                                <div className="right-payments-body">
<<<<<<< HEAD
                                    <button className="secondary-cta">View Job</button>
=======
                                   <button className="secondary-cta"onClick={()=>router.push("/checkout")} >View Job</button>
>>>>>>> recovery-branch
                                </div>
                            </div>
                            <div className="my-payments-body">
                                <div className="left-payments-body">
                                    <div className="plumbing-icon">
                                    <img src="images/inner-page/plum-img.svg" alt=""/>
                                </div>
                                <div className="paid">
                                    <h5>Plumbing - Shower Repair <span><img src="images/inner-page/paidcircle-tick.svg" alt=""/> Paid</span></h5>
                                    <p>Nov 19, 2026 • 10:30 AM</p>
                                    <p className="amount">Amount : <span>$149</span> </p>
                                </div>
                                </div>
                                <div className="right-payments-body">
<<<<<<< HEAD
                                    <button className="secondary-cta">View Job</button>
=======
                                   <button className="secondary-cta"onClick={()=>router.push("/checkout")} >View Job</button>
>>>>>>> recovery-branch
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="tab-pane fade"
                            id="customTabs-contact"
                            role="tabpanel"
                            aria-labelledby="customTabs-pending-tab">
                            <div className="my-payments-body-wrp">
                                <div className="my-payments-body">
                                <div className="left-payments-body">
                                    <div className="plumbing-icon">
                                    <img src="images/inner-page/plum-img.svg" alt=""/>
                                </div>
                                <div className="paid pending">
                                    <h5>Plumbing - Shower Repair <span><img src="images/inner-page/pending-clock-icon.svg" alt=""/> Pending</span></h5>
                                    <p>Nov 19, 2026 • 10:30 AM</p>
                                    <p className="amount">Amount : <span>$149</span> </p>
                                </div>
                                </div>
                                <div className="right-payments-body">
<<<<<<< HEAD
                                    <button className="secondary-cta">View Job</button>
=======
                                   <button className="secondary-cta"onClick={()=>router.push("/checkout")} >View Job</button>
>>>>>>> recovery-branch
                                    <button className="primary-cta" onClick={()=>router.push("/checkout")}><img className="pay" src="images/modal/notice-right-arrow.svg" alt=""/> Pay Now</button>
                                </div>
                            </div>
                            <div className="my-payments-body">
                                <div className="left-payments-body">
                                    <div className="plumbing-icon">
                                    <img src="images/inner-page/plum-img.svg" alt=""/>
                                </div>
                                <div className="paid pending">
                                    <h5>Plumbing - Shower Repair <span><img src="images/inner-page/pending-clock-icon.svg" alt=""/> Pending</span></h5>
                                    <p>Nov 19, 2026 • 10:30 AM</p>
                                    <p className="amount">Amount : <span>$149</span> </p>
                                </div>
                                </div>
                                <div className="right-payments-body">
<<<<<<< HEAD
                                    <button className="secondary-cta">View Job</button>
=======
                                   <button className="secondary-cta"onClick={()=>router.push("/checkout")} >View Job</button>
>>>>>>> recovery-branch
                                    <button className="primary-cta" onClick={()=>router.push("/checkout")}><img className="pay" src="images/modal/notice-right-arrow.svg" alt=""/> Pay Now</button>
                                </div>
                            </div>
                            <div className="my-payments-body">
                                <div className="left-payments-body">
                                    <div className="plumbing-icon">
                                    <img src="images/inner-page/plum-img.svg" alt=""/>
                                </div>
                                <div className="paid pending">
                                    <h5>Plumbing - Shower Repair <span><img src="images/inner-page/pending-clock-icon.svg" alt=""/> Pending</span></h5>
                                    <p>Nov 19, 2026 • 10:30 AM</p>
                                    <p className="amount">Amount : <span>$149</span> </p>
                                </div>
                                </div>
                                <div className="right-payments-body">
<<<<<<< HEAD
                                    <button className="secondary-cta">View Job</button>
=======
                                    <button className="secondary-cta"onClick={()=>router.push("/checkout")} >View Job</button>
>>>>>>> recovery-branch
                                    <button className="primary-cta" onClick={()=>router.push("/checkout")} ><img className="pay" src="images/modal/notice-right-arrow.svg" alt=""/> Pay Now</button>
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
       
         
      </div>
    
       </main>
    </div>
  )
}

export default Payment
