import React from 'react'

const WelcomeModal = () => {
    return (
        <div
            className="modal fade welcome"
            id="welcome-SevaServeModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="welcome-seva-ser">
                            <img src="images/modal/welcome-img.svg" className="check" alt="" />
                            <h4>Welcome to SevaServe!</h4>
                            <p>Your trusted service partner is now in your pocket.</p>
                            <a
                                href="#add-Your-Card"
                                data-bs-toggle="modal"
                                className="primary-cta"
                            >Explore Services
                                <img
                                    src="images/modal/right-arrow-icon.svg"
                                    className="arrow"
                                    alt=""
                                /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeModal