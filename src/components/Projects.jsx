import { useEffect, useState } from "react";
import "./Projects.css";

import projgif from "../assets/projgif.gif";
import projmeal from "../assets/proj-meal.png";
import projpantry from "../assets/proj-pantry.png";
import projsundae from "../assets/proj-sundae.png";
import projweather from "../assets/proj-weather.png";
import projscratch from "../assets/proj-scratch.png";

export default function Projects() {
    const [ProjectData, setProjectData] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const response = await fetch("/project.json");
            const data = await response.json();
            setProjectData(data.projects);
        };
        getProjects();
    }, []);

    const images = {
        projscratch: projscratch,
        projweather: projweather,
        projmeal: projmeal,
        projpantry: projpantry,
        projsundae: projsundae,
    }

    return (
        <section id="projects">
            <h3>#Projects</h3>

            <div className="card no-border">
                <div className="card-body text-bg-theme">
                    <h4 className="card-title video-title">Coding is Storytelling. My project overview in 10s!</h4>
                </div>
                <img src={projgif} className="card-img-bottom" alt="summary of projects" />
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {ProjectData.map((project, index) => (
                    <div className="col" key={index}>
                        <div className="card no-border">
                            <img src={images[project.imgSrc]} className="card-img-top" alt={project.alt} />
                            <div className="card-body">
                                <h4 className="card-title">{project.title}</h4>
                                <p className="card-text">{project.description}</p>
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="badge text-bg-theme">{tech}</span>
                                ))}
                                <div className="external-link">
                                    {project.links.map((link, linkIndex) => (
                                        <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer">{link.type}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
