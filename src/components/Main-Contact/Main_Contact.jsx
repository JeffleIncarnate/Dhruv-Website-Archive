import "./Main_Contact.css";

import { useRef } from "react";
import { FaLocationArrow, FaDiscord } from "react-icons/fa";

function MainContact() {
  const fName = useRef(null);
  const lName = useRef(null);
  const email = useRef(null);
  const pNumber = useRef(null);
  const message = useRef(null);

  let clear_form = () => {
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pNumber").value = "";
    document.getElementById("message").value = "";
  };

  let validate_data = (values) => {
    for (let [key, value] of Object.entries(values)) {
      if (value === null || value === undefined || value === "") {
        if (key === "phone_number") {
          return true;
        }
        return false;
      }
    }
    return true;
  };

  let send_email = (values) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      subject: "https://dhruv-website.vercel.app/ - Contact Form",
      body: `First name: ${values.first_name}, Last name: ${values.last_name}, Email: ${values.email}, Phone Number: ${values.phone_number}, Message: ${values.message}`,
      user_to: "dhruvrayat50@gmail.com",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://192.9.182.113:3000/send_email", requestOptions)
      .then((response) => response.json())
      .then((result) => alert(result.detail))
      .catch((error) => alert(error.detail));
  };

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

            if (!validate_data(values)) return alert("Provide all values.");

            send_email(values);
            clear_form();
          }}
        >
          <div className="contact_wrapper">
            <div className="contact_inner_wrapper">
              <label htmlFor="fName">First Name*</label>
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
              <label htmlFor="lName">Last Name*</label>
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
              <label htmlFor="email">Email*</label>
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
            <label>Your Message*</label>
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
