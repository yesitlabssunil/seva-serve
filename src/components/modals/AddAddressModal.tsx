"use client";

import React, {useState} from "react";

const AddAddressModal = () => {
  const [selectedType, setSelectedType] = useState("Home");

  const [formData, setFormData] = useState({
    house: "",
    floor: "",
    area: "",
    landmark: "",
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const finalData = {
    addressType: selectedType,
    ...formData,
  };

  console.log(finalData);

  setFormData({
    house: "",
    floor: "",
    area: "",
    landmark: "",
  });

  setSelectedType("Home");

  const modal = document.getElementById("add-address-popup");

  if (modal) {
    const bootstrapModal = (window as any).bootstrap?.Modal.getInstance(modal);

    bootstrapModal?.hide();
  }
};


  return (
    <div
      className="modal fade"
      id="add-address-popup"
      data-bs-backdrop="static"
      tabIndex={-1}
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

              <h1>Add New Address</h1>

              <form onSubmit={handleSubmit}>

                <div className="your-location-top">

                  <div className="your-location-top-in">

                    <div className="use-location">

                      <img
                        src="images/saved-addresses/location.svg"
                        alt=""
                      />

                      <div className="use-location-data">

                        <h5>Use My Current Location</h5>

                        <p>
                          Enable your current location for better services
                        </p>

                      </div>

                      <button
                        type="button"
                        className="reject-btn"
                      >
                        Enable
                      </button>

                    </div>

                  </div>

                </div>

                <div className="edit-add">

                  <h2>
                    Save Address as <span>*</span>
                  </h2>

                  <div className="address-tags">

                    <button
                      type="button"
                      className={
                        selectedType === "Home" ? "active" : ""
                      }

                      onClick={() => setSelectedType("Home")}
                    >
                      Home
                    </button>

                    <button type="button"
                    className={
                      selectedType === "Office" ? "active" : ""
                    }
                    onClick={() => setSelectedType("Office")}
                    >
                      Office
                    </button>

                    <button type="button" 
                    className={
                      selectedType === "Other" ? "active" : ""
                    }

                    onClick={() => setSelectedType("Other")}
                    >
                      Other
                    </button>

                  </div>

                  <div className="addres-form">

                    <input
                      type="text"
                      name="house"
                      placeholder="Flat/ House no/ Building name"
                      value={formData.house}
                      onChange={handleChange}
                    />

                    <input
                      type="text"
                      name="floor"
                      placeholder="Floor (Optional)"
                      value={formData.floor}
                      onChange={handleChange}
                    />

                    <input
                      type="text"
                      name="area"
                      placeholder="Area/ Sector/ Locality"
                      value={formData.area}
                      onChange={handleChange}
                    />

                    <input
                      type="text"
                      name="landmark"
                      placeholder="Nearby Landmark (Optional)"
                      value={formData.landmark}
                      onChange={handleChange}
                    />

                    <button
                      type="submit"
                      className="primary-cta"
                    >
                      Save Address
                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AddAddressModal;