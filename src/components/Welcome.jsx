import { useEffect, useState } from "react";
import "./Welcome.css";

import profilePic from "../assets/yanpropic4.png";

export default function Welcome(){
    const [name, setName] = useState("");
    const [headline, setHeadline] = useState("");

    useEffect(() => {
        const getWelcome = async () => {
            const response = await fetch("/about.json");
            const data = await response.json();
            setName(data.name);
            setHeadline(data.headline);
        };
        getWelcome();
    }
    , []);

    return(
        <section id="welcome"> 
        <h1 id="hero-text">{name}</h1>
        <h2 id="headline">{headline}</h2>
        <div id="intro">
          <div id="intro-text">
            <h3>Hello World, Welcome to <span id="site-name">Yan Can Code</span> !</h3>
            <p className="intro-text-para">I'm a passionate full stack web developer with <strong>over 4 years</strong> of experience in the <strong>digital marketing and administration</strong> industry. Currently based in Toronto.</p>
            <p className="intro-text-para">My journey in web development has been driven by a dedication to creating top-notch web solutions and effectively managing projects. I take great pleasure in building websites from scratch, infusing them with customised elements that enhance the user experience.</p>
          </div>
          <div className="propic">
            <img src={profilePic} alt="Profile picture of Yan" />
          </div>
        </div>
      </section> 


    );
}
