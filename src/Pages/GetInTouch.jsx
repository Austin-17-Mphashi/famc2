import React from "react";

function GetInTouch() {
  return (
    <div>
        <section id="contact" class="main style3 secondary">
        <div class="content">
          <header>
            <h2>Say Hello.</h2>
            <p>
              Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore
              condimentum.
            </p>
          </header>
          <div class="box">
            <form method="post" action="#">
              <div class="fields">
                <div class="field half">
                  <input type="text" class="form-control"  name="name" placeholder="Name" />
                </div>
                <div class="field half">
                  <input type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email Address"
                  required />
                </div>
                <div class="field">
                  <textarea
                     placeholder="Your Message"
                     class="form-control"
                     name="message"
                    
                     required
                    rows="6"
                  ></textarea>
                </div>
              </div>
              <ul class="actions special">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
              <input type="hidden" name="_subject" value="New submission!"/>
              <input type="hidden" name="_autoresponse" value="your email is recieved"></input>
              <input type="hidden" name="_captcha" value="false"></input>
            </form>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default GetInTouch;
