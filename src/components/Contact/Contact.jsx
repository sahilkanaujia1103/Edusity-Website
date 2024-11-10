import React from "react";
import "./Contact.css"
import msg_icon from '../../assets/msg-icon.png'
import email from "../../assets/mail-icon.png"
import phone from "../../assets/phone-icon.png"
import location from "../../assets/location-icon.png"
import arrow from "../../assets/white-arrow.png"

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1d09e9cd-9445-4061-b1dc-be058ac939cf");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us message <img src={msg_icon} alt="" /></h3>
        <p>
          Unlock your potential—reach out to us today and let’s achieve
          greatness together!
        </p>
        <ul>
            <li><img src={email} alt="" /> Contact@Edusity.dev</li>
            <li> <img src={phone} alt="" /> +91 4325-2345-89</li>
            <li> <img src={location} alt="" />77 WillSon Road, Berkely, California, U.S.A </li>
        </ul>
      </div>
      <div className="contact-col">
        <form  onSubmit={onSubmit}>
           <label htmlFor="name">Your Name</label>
           <input type="text" name="Name" id="name" required placeholder="Enter Your Name"/>
           <label htmlFor="tel">Phone No.</label>
           <input type="tel" name="Phone" id="tel" required placeholder="Enter phone No."/>
           <label htmlFor="msg">Write The Message</label>
           <textarea name="Message" id="msg" placeholder="Text here..." required></textarea>
             <button className="btn dark-btn" type="submit">Send message <img src={arrow} alt="" /></button>
        </form>
        <span className="result">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
