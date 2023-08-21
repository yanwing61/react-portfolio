import { useEffect, useState } from "react";
import "./Education.css";

import humber from "../assets/humber.png";
import cuhk from "../assets/cuhk.png";
import uib from "../assets/uib.png";

export default function Educations() {
    const [EducationData, setEducationData] = useState({});

    useEffect(() => {
        const getEducations = async () => {
            const response = await fetch("/about.json");
            const data = await response.json();
            setEducationData(data.educations);
        };
        getEducations();
    }, []);

    const images = {
        humber: humber,
        cuhk: cuhk,
        uib: uib,
    }

    return (
    <section id="education" className="pad">
        <h3>#Education</h3>

        {Object.entries(EducationData).map(([schoolName, educationDetails]) => (
            <div key={schoolName}>
                <a href={educationDetails.logo.link} target="_blank" rel="noopener noreferrer">
                    <img src={images[educationDetails.logo.url]} alt={educationDetails.logo.alt} id={educationDetails.logo.url} />
                </a>
                <h4 className="school">{schoolName}</h4>
                <p>{educationDetails.degree} | <i>{educationDetails.duration}</i></p>
                {educationDetails.details && educationDetails.details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                ))}
            </div>
        ))}
        
    </section>
    );
}
