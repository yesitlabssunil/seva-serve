import React from 'react'

const NotificationDropdown = () => {
  return (
    <div className="icon bell-icon position-relative dropdown">
    <img
      src="images/header/bell-icon.svg"
      alt="Logo"
      className="logo dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    />
    <span
      className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
      style={{backgroundColor: "#991318"}}
    >
      2
      <span className="visually-hidden">unread messages</span>
    </span>
    <div className="dropdown-menu dropdown-menu-end">
      <div className="notification-list">
        <h1>Notifications</h1>
        <div className="top-fltr">
          <button type="button" className="active">All</button>
          <button type="button">Offers</button>
          <button type="button">Alerts</button>
        </div>
        <div className="notification-in">
          <div className="notification-item">
            <div className="notification-data">
              <h3>Confirm & Pay Remaining Amount</h3>
              <p>$149 is pending for AC Repair – Cooling Issue.</p>
            </div>
            <span>Just Now</span>
          </div>
          <div className="notification-item">
            <div className="notification-data">
              <h3>Contractor suggested a new time</h3>
              <p>
                Your contractor proposed a new service time for Plumbing –
                Sink Installation.
              </p>
            </div>
            <span>Just Now</span>
          </div>
          <div className="notification-item">
            <div className="notification-data">
              <h3>Your booking is confirmed</h3>
              <p>
                Your plumbing service is scheduled for 20 Nov, 11:30 AM.
              </p>
            </div>
            <span>1h ago</span>
          </div>
          <div className="notification-item">
            <div className="notification-data">
              <h3>Flat 20% Off <button type="button" className="code-copy">HOME20</button></h3>
              <p>
                Avail discount on all home repair services. Valid till
                tonight.
              </p>
            </div>
            <span>5h ago</span>
          </div>
          <div className="notification-item">
            <div className="notification-data">
              <h3>Safety Alert</h3>
              <p>
                Please verify the technician identity before allowing
                entry.
              </p>
            </div>
            <span>Yesterday</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NotificationDropdown