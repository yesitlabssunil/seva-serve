import React from 'react'

const RateContractorPopup = () => {
  return (
    <>
      <div className="modal fade" id="rate-contractor-popup" data-bs-backdrop="static" tabIndex={-1}
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="modal-body p-0">
          <div className="rate-contractor-wrp">
            <h1>Rate Your Experience</h1>
            <form >
              <h2>How was your experience?</h2>
              <div className="rating-stars">
                <div className="rating-group">
                  <input disabled checked className="rating__input rating__input--none" name="rating4"
                    id="rating4-none" value="0" type="radio"/>
                  <label aria-label="1 star" className="rating__label" htmlFor="rating4-1">
                    
                    <img
                      className="rating__icon rating__icon--star" src="images/rating-star.svg"/></label>
                  <input className="rating__input" name="rating4" id="rating4-1" value="1" type="radio"/>
                  <label aria-label="2 stars" className="rating__label" htmlFor="rating4-2">
                    
                    <img
                      className="rating__icon rating__icon--star" src="images/rating-star.svg"/></label>
                  <input className="rating__input" name="rating4" id="rating4-2" value="2" type="radio"/>
                  <label aria-label="3 stars" className="rating__label" htmlFor="rating4-3">
                    
                    <img
                      className="rating__icon rating__icon--star" src="images/rating-star.svg"/></label>
                  <input className="rating__input" name="rating4" id="rating4-3" value="3" type="radio"/>
                  <label aria-label="4 stars" className="rating__label" htmlFor="rating4-4">
                    
                    <img
                      className="rating__icon rating__icon--star" src="images/rating-star.svg"/></label>
                  <input className="rating__input" name="rating4" id="rating4-4" value="4" type="radio"/>
                  <label aria-label="5 stars" className="rating__label" htmlFor="rating4-5">
                    <img
                      className="rating__icon rating__icon--star" src="images/rating-star.svg"/></label>
                  <input className="rating__input" name="rating4" id="rating4-5" value="5" type="radio"/>
                </div>
              </div>
              <h2>Write your Feedback</h2>
              <textarea placeholder="Please share your feedback"></textarea>
              <div className="home-quotes-cta">
                <button type="button" data-bs-dismiss="modal" className="reject-btn">Cancel</button>
                <button type="button" data-bs-target="#rateSevaServe" data-bs-toggle="modal" className="primary-cta rgt"> Rate <img
                    src="images/home/right-img.svg" alt=""/> </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default RateContractorPopup
