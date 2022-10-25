import "./Main_Contact.css";

import { useRef } from "react";
import { FaLocationArrow, FaDiscord } from "react-icons/fa";

function MainContact() {
  const fName = useRef(null);
  const lName = useRef(null);
  const email = useRef(null);
  const pNumber = useRef(null);
  const message = useRef(null);

  function ClearForm() {
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pNumber").value = "";
    document.getElementById("message").value = "";
  }

  return (
    <main className="contact_main">
      <div className="contact_left">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const values = {
              first_name: fName.current.value,
              last_name: lName.current.value,
              email: email.current.value,
              phone_number: pNumber.current.value,
              message: message.current.value,
            };

            console.log(values);

            ClearForm();
          }}
        >
          <div className="contact_wrapper">
            <div className="contact_inner_wrapper">
              <label htmlFor="fName">First Name</label>
              <input
                id="fName"
                ref={fName}
                required
                name="fName"
                placeholder="Joe"
                type="text"
              ></input>
            </div>

            <div className="contact_inner_wrapper">
              <label htmlFor="lName">Last Name</label>
              <input
                id="lName"
                ref={lName}
                required
                name="lName"
                placeholder="Smith"
                type="text"
              ></input>
            </div>
          </div>

          <div className="contact_wrapper">
            <div className="contact_inner_wrapper">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                ref={email}
                required
                name="email"
                placeholder="name@website.com"
                type="email"
              ></input>
            </div>

            <div className="contact_inner_wrapper">
              <label htmlFor="pNumber">Phone Number</label>
              <input
                id="pNumber"
                ref={pNumber}
                name="email"
                placeholder="+12 345 6789"
                type="number"
              ></input>
            </div>
          </div>

          <div className="contact_textarea">
            <label>Your Message</label>
            <textarea
              id="message"
              ref={message}
              required
              placeholder="Leave a comment..."
            />
          </div>
          <p>
            By submitting this form you agree to our terms and conditions and
            our privacy policy which explains how we may collect, use and
            disclose your personal information including to third parties.
          </p>

          <div className="contact_submit">
            <input type="submit" />
          </div>
        </form>
      </div>

      <div className="contact_right">
        <div className="contact_right_section">
          <FaLocationArrow className="contact_right_section_icon" />
          <h2>Location</h2>
          <p>Auckland, New Zealand</p>
        </div>

        <div className="contact_right_section">
          <FaDiscord className="contact_right_section_icon" />
          <h2>Discord</h2>
          <p>໓hrนง rคฯคt#2867</p>
        </div>
      </div>
    </main>
  );
}

export default MainContact;
