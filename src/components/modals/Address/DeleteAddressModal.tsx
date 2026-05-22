import React from 'react'

const DeleteAddressModal = () => {
  return (
    <>
        <div className="modal fade welcome" id="delete-address-popup" data-bs-backdrop="static" data-bs-keyboard="false"
           tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="welcome-seva-ser">
            <img src="images/saved-addresses/delete-pop.svg" className="check" alt=""/>
            {/* <!-- <h4>Welcome to SevaServe!</h4> --> */}
            <p><b>Are you sure you want to delete this address?</b></p>
            <a href="#" data-bs-toggle="modal" className="primary-cta">Delete Address</a>
            <button type="button" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>

      </div>
    </div>
  </div>
    </>
  )
}

export default DeleteAddressModal
