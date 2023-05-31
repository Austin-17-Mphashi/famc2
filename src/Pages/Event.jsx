import React from 'react'
import { useParams, useLocation } from "react-router-dom";

function Event() {

  const location = useLocation();
  const { data } = location.state;

  return (
    <div>
      
      <p>{data.topic}</p>
      <p>{data.date}</p>
      <p>{data.duration}</p>
      <p>{data.time}</p>
      <p>{data.audience}</p>
      <div>
        <h3>Book Event</h3>
        <div>
      <div class="container">
        <h1>FormSubmit Demo</h1>
        <form
          target="_blank"
          action="https://formsubmit.co/28215d489a760835ab0039e2c4cd7b30"
          method="POST"
        >
          <div class="form-group">
            <div class="form-row">
              <div class="col">
              <input type="hidden" name="_subject" value="Event Booking!"/>
              <input type="hidden" name="topic" value={data.topic} />
              <input type="hidden" name="date" value={data.date} />
              <input type="hidden" name="duration" value={data.duration} />
              <input type="hidden" name="time" value={data.time} />
              <input type="hidden" name="audience" value={data.audience} />
              <input type="hidden" name="_autoresponse" value="your booking has recieved"></input>
              <input type="hidden" name="_captcha" value="false"></input>
              
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div class="col">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          
          <button type="submit" class="btn btn-lg btn-dark btn-block">
            Submit Form
          </button>
        </form>
      </div>
    </div>

      </div>
    </div>
  )
}

export default Event
