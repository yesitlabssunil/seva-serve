"use client";
import RequestModal from '@/components/modals/RequestModal'
import { useRouter } from 'next/navigation'
import React from 'react'

const SummaryEstimate = () => {
 const router =useRouter()

  return (
   <> 
     <main>
      <div className="container home-wraper">
       
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="browse-wrp">
                  <div className="browse-ctg-head">
                    <h2 className="sub-cate-page"> <a  onClick={(e) => {
                            e.preventDefault();
                            router.back();
                        }}>
                     <img src="images/home/left-arrow.svg" alt=""/></a>Summary & Estimate</h2>
                                    </div>
                 <div className="issue-details-wrp">
                    <div className="selected-category">
                        <div className="category">
                            <p>Selected Category</p>
                        <a href="#"><img src="images/inner-page/edit-icon-c.svg" alt=""/></a>
                        </div>
                        <h4>Plumbing</h4>
                    </div>

                    <div className="selected-category">
                        <div className="category">
                            <p>Selected Subcategory</p>
                        <a href="#"><img src="images/inner-page/edit-icon-c.svg" alt=""/></a>
                        </div>
                        <h4>Installations</h4>
                    </div>

                    <div className="selected-category">
                        <div className="category">
                            <p>Selected Issue</p>
                        <a href="#"><img src="images/inner-page/edit-icon-c.svg" alt=""/></a>
                        </div>
                        <h4>Tap / Faucet Installation</h4>
                        <span className="primary-cta tap">Tap Handle Broken</span>
                    </div>

                    <div className="selected-category">
                        <div className="category">
                            <p>Problem Description</p>
                        <a href="#"><img src="images/inner-page/edit-icon-c.svg" alt=""/></a>
                        </div>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                    </div>

                    <div className="upload-img selected-category">
                        <p>Uploaded Image/Video</p>
                        <div className="up-image-wrp">
                            <img src="images/inner-page/issue-icon.svg" alt=""/>
                            <img src="images/inner-page/issue-icon.svg" alt=""/>
                            <img src="images/inner-page/issue-icon.svg" alt=""/>
                            <img src="images/inner-page/issue-icon.svg" alt=""/>
                        </div>
                    </div>

                    

                    <div className="estimated-total">
                        <div className="estimated">
                            <p>Estimated Total (range)</p>
                            <span>$149-$299</span>
                        </div>
                        <div className="avrg">
                            <p>Average cost</p>
                            <span>$224 </span>
                        </div>
                    </div>

                    <div className="request-btn">
                        <button type="button" className="secondary-cta" data-bs-dismiss="modal">Save & Add More</button>
                        <button type="button" data-bs-target="#requestSuccessfully" data-bs-toggle="modal" className="primary-cta">Save & Add to Service Cart</button>
                    </div>

                 </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
         
      </div>
      
</main>

<RequestModal/>
   </>
  )
}

export default SummaryEstimate
