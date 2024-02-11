import React, { useRef } from "react";
import "./Contact.css";
import arrow from "../../assets/assets/send.png";
import emailjs from "@emailjs/browser";
import linkedinIcon from "../../assets/assets/linkedin.png";
import whatsappIcon from "../../assets/assets/whatsapp.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ozfoh9l",
        "template_ivt2qgc",
        form.current,
        "DGPEYjXByFEBVVJXQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h1 className="contactTitle">Contact Me</h1>
      <span className="contactDescription">
        If you are intrested, please fill out the form below to send me an email
        & discuss job opportunities or click in the social media icons as well.
      </span>
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input
          type="text"
          className="clientName"
          placeholder="Your Name/Organization's Name"
          name="from_name"
        />
        <input
          type="email"
          className="clientEmail"
          placeholder="name@dominion.com"
          name="from_email"
        />
        <textarea
          className="clientMessage"
          name="message"
          rows={5}
          placeholder="Message..."
        ></textarea>
        <button className="submit" type="submit" value="Send">
          <img src={arrow} alt="" className="arrowImage" /> Submit
        </button>
        <div className="links">
          <img
            src={linkedinIcon}
            alt="Linkedin"
            className="link"
            onClick={() => {
              window.location =
                "https://www.linkedin.com/in/ignacio-josué-zelada-araya-ab16b4257";
            }}
          />
          <img
            src={whatsappIcon}
            alt="Whatsapp"
            className="link"
            onClick={() => {
              window.location = "https://wa.me/+50686878410";
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
