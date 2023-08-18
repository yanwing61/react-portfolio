import { useEffect, useState } from "react";
import "./Footer.css";

import emailWhite from "../assets/email-w.png";
import linkedinWhite from "../assets/linkedin-w.png";
import githubWhite from "../assets/github-w.png";
import top from "../assets/top.png";

export default function Footer() {
    const [ContactData, setContactData] = useState([]);

useEffect(() => {
    const getContacts = async () => {
        const response = await fetch("/contact.json");
        const data = await response.json();
        setContactData(data.contactInfo);
    };
    getContacts();
}, []);

const images = {
    'email-w': emailWhite,
    'linkedin-w': linkedinWhite,
    'github-w': githubWhite,
}

return(
    <footer id="footer">
      <h2 className="footer" id="connect">Let's connect!</h2>
      <div id="footer-contact">
        <div className="slogan">Yan Can Code</div>

        <div>
            {ContactData.map((info, index) => (
                <p key={index}>
                    <a href={info.url} target="_blank" rel="noreferrer">
                        <img src={images[info.imgSrc]} alt={info.alt} id={info.id} />
                        {info.displayText}
                    </a>
                </p>
            ))}
        </div>
      </div>

      <div id="footer-copyright">
        <div className="footer">&copy; Copyright Yan Wing Pang, 2023.</div>
        <div className="footer" id="top"><a href="/"><img src={top} alt="Up to top icon"/></a></div>
      </div>
    </footer>
)}