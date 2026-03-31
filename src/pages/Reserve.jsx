const Reserve = () => {
  return (
    <section className="reserve-page" id='reserve'>
      <div className="res-info">
        <p className="reserve-head">reserve ⸺</p>
        <p className="reserve-title">Secure your <span>evening</span></p>

        <p className="reserve-p">
          We offer two sittings each evening — at 18:30 and 21:00. The full tasting menu spans approximately three and a half hours.
        </p>
        <p className="reserve-p">
          For parties of more than six, or for private dining enquiries, please contact us directly at <span className="reserve-email">reservations@aurum.com</span>.
        </p>

        <div className="hours-table">
          <div className="hours-row">
            <span className="hours-day">Tuesday — Thursday</span>
            <span className="hours-time">18:30 · 21:00</span>
          </div>
          <div className="hours-row">
            <span className="hours-day">Friday — Saturday</span>
            <span className="hours-time">18:00 · 21:00</span>
          </div>
          <div className="hours-row">
            <span className="hours-day">Sunday</span>
            <span className="hours-time">12:00 · 18:00</span>
          </div>
          <div className="hours-row">
            <span className="hours-day">Monday</span>
            <span className="hours-time hours-closed">Closed</span>
          </div>
        </div>
      </div>

      <div className="res-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Jean" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Dupont" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Sitting</label>
            <select>
              <option>18:30 — First Sitting</option>
              <option>21:00 — Second Sitting</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Guests</label>
            <select>
              <option>2 guests</option>
              <option>3 guests</option>
              <option>4 guests</option>
              <option>5 guests</option>
              <option>6 guests</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="jean@example.com" />
          </div>
        </div>
        <div className="form-group">
          <label>Special Requests</label>
          <input type="text" placeholder="Dietary requirements, occasion..." />
        </div>
        <button className="btn-submit">Request Reservation</button>
      </div>
    </section>
  )
}

export default Reserve