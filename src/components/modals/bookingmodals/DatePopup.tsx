import React from 'react'

const DatePopup = () => {
    return (
        <>
              <div className="modal fade" id="select-date-time-popup" data-bs-backdrop="static" tabIndex={-1}
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="modal-body">
          <div className="select-date-time-wrp">
            <h1>Select Date & Time</h1>
            <form >
              <div className="select-date-time-inner">
                <div className="select-date-in">
                  <div id="datepicker-2"></div>
                </div>
                <div className="select-time-in">
                  <div className="saved-date-times">
                    <h3>Time Slot - 12 Nov</h3>
                    <p>3:00 PM - 5:00 PM</p>
                    <button type="button" className="remove-btn"><i className="fa-solid fa-xmark"></i></button>
                  </div>
                  <div className="saved-date-times">
                    <h3>Time Slot - 12 Nov</h3>
                    <p>3:00 PM - 5:00 PM</p>
                    <button type="button" className="remove-btn"><i className="fa-solid fa-xmark"></i></button>
                  </div>
                  <div className="saved-date-times">
                    <h3>Time Slot - 12 Nov</h3>
                    <p>3:00 PM - 5:00 PM</p>
                    <button type="button" className="remove-btn"><i className="fa-solid fa-xmark"></i></button>
                  </div>
                  <h2>Time Slot - 12 Nov</h2>
                  <div className="select-time-btn-grp">
                    <input type="radio" hidden checked id="time-1" name="time" value="1"/>
                    <label htmlFor="time-1"><i className="fa-regular fa-clock"></i> 11:00 AM - 1:00 PM</label>

                    <input type="radio" hidden id="time-2" name="time" value="2"/>
                    <label htmlFor="time-2"><i className="fa-regular fa-clock"></i> 11:00 AM - 1:00 PM</label>

                    <input type="radio" hidden id="time-3" name="time" value="3"/>
                    <label htmlFor="time-3"><i className="fa-regular fa-clock"></i> 11:00 AM - 1:00 PM</label>

                    <input type="radio" hidden id="time-4" name="time" value="4"/>
                    <label htmlFor="time-4"><i className="fa-regular fa-clock"></i> 11:00 AM - 1:00 PM</label>

                    <input type="radio" hidden id="time-5" name="time" value="5"/>
                    <label htmlFor="time-5"><i className="fa-regular fa-clock"></i> 11:00 AM - 1:00 PM</label>
                  </div>
                </div>
              </div>
              <div className="service-address">
                <p>Service Address</p>
                <input type="text" placeholder="Enter full address" value="123, Street, Anywhere, 11001"/>
              </div>
              <div className="select-date-time-foot">
                <button type="button" className="unfilled" data-bs-dismiss="modal">Cancel</button>
                <button data-bs-target="#rescheduleRequest" data-bs-toggle="modal" type="button" className="filled">
                  Confirm & Book <img src="images/home/right-img.svg" alt=""/>
                </button>
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

export default DatePopup
