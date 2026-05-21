import React from 'react'

const LocationModal = () => {
  return (
    <div
      className="modal fade"
      id="your-location-popup"
      data-bs-backdrop="static"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="modal-body">
            <div className="select-date-time-wrp">
              <h1>Your Location</h1>
              <form action="">
                <div className="your-location-top">
                  <input
                    type="text"
                    placeholder="Search a new address"
                    className="top-srch"
                  />
                  <div className="your-location-top-in">
                    <div className="use-location">
                      <img src="images/saved-addresses/location.svg" alt="" />
                      <div className="use-location-data">
                        <h5>Use My Current Location</h5>
                        <p>Enable your current location for better services</p>
                      </div>
                      <button type="button" className="reject-btn">Enable</button>
                    </div>
                    <hr />
                    <button
                      type="button"
                      data-bs-target="#add-address-popup"
                      data-bs-toggle="modal"
                      className="add-address"
                    >
                      <i className="fa-solid fa-plus"></i> Add New Address
                    </button>
                  </div>
                  <h5>Your Saved Addresses</h5>
                  <div className="svd-add-wrp">
                    <input
                      type="radio"
                      id="address-1"
                      value="1"
                      name="saved-addresses"
                      hidden
                      checked
                    />
                    <label for="address-1" className="saved-addresses-in">
                      <div className="saved-addresses-icon">
                        <img src="images/saved-addresses/1.svg" alt="" />
                      </div>
                      <div className="saved-addresses-data">
                        <h4>Home</h4>
                        <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                      </div>
                    </label>
                    <input
                      type="radio"
                      id="address-2"
                      value="2"
                      name="saved-addresses"
                      hidden
                    />
                    <label for="address-2" className="saved-addresses-in">
                      <div className="saved-addresses-icon">
                        <img src="images/saved-addresses/2.svg" alt="" />
                      </div>
                      <div className="saved-addresses-data">
                        <h4>Office</h4>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                      </div>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationModal