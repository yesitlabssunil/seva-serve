import React from 'react'

const NewServiceRejectionModal = () => {
  return (
    <div className="modal fade welcome" id="servicesRejection" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="welcome-seva-ser">
            <h4>Services Rejection</h4>
            <p>Help us understand why you’re rejecting <br />
this service.</p>
            <div className="reject-text-area">
              <label htmlFor="">Reason for Rejection</label>
              <textarea placeholder="Share your reason for rejection"></textarea>
            </div>
            <div className="home-quotes-cta">
           
            <a href="#" className="primary-cta rgt" data-bs-toggle="modal" data-bs-target="#servicesRejected">  Reject </a>
             <button type="button" data-bs-dismiss="modal" className="reject-btn">Cancel</button>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default NewServiceRejectionModal