import React from 'react'
import toast from 'react-hot-toast';

const NewServiceRejectionModal = () => {


  const [reason, setReason] = React.useState<string>("");

  // const handleServiceRejection = () => {
  //   if (reason.trim() === "") {
  //     toast.error("Please provide a reason for rejection.");
      
  //     return;
  //   }
  // }

<<<<<<< HEAD
const handleServiceRejection = (e: React.MouseEvent<HTMLAnchorElement>) => {
=======
const handleServiceRejection = (
  e: React.MouseEvent<HTMLAnchorElement>
) => {
>>>>>>> recovery-branch
  e.preventDefault();

  if (!reason || reason.trim() === "") {
    toast.error("Please provide a reason for rejection.");
    return;
  }

<<<<<<< HEAD
  const modalEl = document.getElementById("servicesRejected");

  if (!modalEl) {
    console.log("Modal not found");
    return;
  }

  const bootstrap = (window as any).bootstrap;

  const modalInstance =
    bootstrap?.Modal?.getInstance(modalEl) ||
    bootstrap?.Modal?.getOrCreateInstance(modalEl);

   console.log("modalInstance:", modalInstance);

  modalInstance?.hide();
=======
  const bootstrap = (window as any).bootstrap;

  // Close current modal
  const rejectionModal = document.getElementById("servicesRejection");

  if (rejectionModal) {
    const rejectionInstance =
      bootstrap.Modal.getInstance(rejectionModal) ||
      bootstrap.Modal.getOrCreateInstance(rejectionModal);

    rejectionInstance.hide();
  }

  // Open confirmation modal
  const confirmationModal = document.getElementById("servicesRejected");

  if (confirmationModal) {
    const confirmationInstance =
      bootstrap.Modal.getOrCreateInstance(confirmationModal);

    confirmationInstance.show();
  }
>>>>>>> recovery-branch

  setReason("");
};
  

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
              <textarea 
                placeholder="Share your reason for rejection" 
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              ></textarea>
            </div>
            <div className="home-quotes-cta">
           
            <a href="#" className="primary-cta rgt"  
             onClick={handleServiceRejection}>  Reject </a>
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