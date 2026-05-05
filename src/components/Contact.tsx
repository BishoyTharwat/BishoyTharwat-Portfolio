import '../assets/styles/Contact.scss';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Feel free to reach out for opportunities or collaborations 👇</p>

          <div className="contact-info">
            <div className="contact-item">
              <FaPhone />
              <span>+20 120 721 94102</span>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:bishoytharwat20@gmail.com">
                bishoytharwat20@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/bishoy-tharwat/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="contact-item">
              <FaGithub />
              <a
                href="https://github.com/BishoyTharwat"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;